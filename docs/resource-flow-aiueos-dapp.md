# app-resource-flow — itonami（dapp）上の分散型設計

状態: 第 1 スライス実装（2026-10-19）。正本はこの文書。
追跡: Linear JUN-117（親 JUN-116「itonami dapp 整備プログラム」）。

## 位置づけ

app-resource-flow は itonami（dapp）の app bundle であり、独立 dapp ではない
（ADR 0007 / 0008）。層の対応・分散状態・決済の全体像は
`network-awai-apex/docs/dapp-architecture-map.md` が正本。ここではこの app の
スライス固有の割り当てだけを書く。

## このスライスで実装したもの

| 層 | 実体 | 状態 |
|---|---|---|
| 判断コア guest | `aiueos/resource_flow_journal.cljk` — flow 検証（anomaly ビット: negative / zero-amount / self-flow 等）+ sankey node value（`max(Σin, Σout)`、state.cljk の sankey-layout 規則に一致）。`:effects #{}` | **実装済み・実測**（下記） |
| アプリ記述子 | `aiueos/resource-flow.edn`（notes.edn 形、`:aiueos/kind :app`） | **実装済み**。aiueos session/grant 配線は未実装 |
| appview adapter | `src/cloud_itonami/app_resource_flow/flow.cljk` — 同セマンティクスの map API + parity fixture | **実装済み・実測**（kbb cljs.test） |
| wasm 産物 | `aiueos/resource_flow_journal.wasm` + provenance / publication sidecar | **実装済み** |

## 実測（2026-10-19、このスライスで実行したもの）

- `amu check aiueos/resource_flow_journal.cljk` → `:ok true`, `:effects #{}`。
- `amu test aiueos/resource_flow_journal.cljk` → **27/27 passed**
  （test 9 本 × targets `[:jvm-kir :js :wasm]`）。
- `amu compile --target wasm32-browser` → wasm（MVP module）+ provenance。
- `npm test`（`kbb --backend sci --classpath src:test test/run_tests.cljk`）→
  4 tests / 8 assertions / 0 failures。

## 未実装境界（このスライスでは触れていない）

- **aiueos への配線**: `aiueos/resource-flow.edn` を session/grant（app catalog）
  に載せた実行は未実施（kotoba-lang/aiueos 側の作業）。
- **分散状態の割り当て**: flow record の複製を awai network のどの DNA（`mon` /
  `ito` / `nuno`、ADR 0005）に載せるかは未決。現状の subscribeRepos 集約は
  Worker（中央）にあり、dapp 化の移行在庫としてここに記録する。
- **anomaly 判定の移行**: 現行 `detectAnomaly` は急増/急減ベース（Heartbeat、
  ADR-0046）。本 guest は flow 単体の異常（negative / zero / self-flow）まで。
  時系列 threshold 判定は第 2 スライス以降。
- **review フロー**（ACK/DIS/ESC、ADR-0074 の reviewed-state join）は人の判断で、
  guest の pure 判定の外。decision の記録は `ito`（署名 source chain）向きだが
  未設計。
- **決済接点**: この app に直接の金銭決済は無い（可視化の 2 次ソース）。

## 次の一手

1. aiueos 側で `:app/resource-flow` を app catalog に載せ grant 経路で起動。
2. anomaly の時系列 threshold 判定を guest に追加（移動平均 + 閾値の純粋関数）。
3. flow record の awai network 配置（mon/ito/nuno 割り当て）を ADR 0005 の
   線で確定。


## 実行 host と ABI（訂正: 2026-10-19、JUN-125）

guest は vector パラメータを使うため **KIR v4 / `kotoba.typed/externref-v1`**
（typed-value ABI）で、「平坦 i64」はレイアウトの話であって ABI の話ではない。
実行 host は契約どおり **kototama-browser-host-v1**（amu selfhost、
`amu/runtime/browser-host.mjs` の typed ホスト）。aiueos の Chicory kernel
ホストは typed ホストを持たず、kernel 経路では名前付き link 拒否
（kotoba-lang/aiueos の itonami-dapp-bundle-test に pin 済み）。L2 の証拠
（admission → selfhost 実行）は同 repo の itonami-dapp-selfhost-test。
なお credits の guest はスカラーのみのため KIR v3 / `kotoba.i64/direct-v1`。
