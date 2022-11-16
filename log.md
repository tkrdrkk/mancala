ドメイン知識の洗い出し
ドメインオブジェクト、用語の選定

まず UI から作る

## next13 x react-testing-library のバグ

- NG: @testing-library/react-hooks
- OK: @testing-library/react
  import { renderHook } from "@testing-library/react";

ここに書いてある通りの解決方法で完璧
https://zenn.dev/k_kazukiiiiii/articles/9f48bdd20435d2

## 実装

### 石のやり取り

薄々わかっていたことだが、Dimple と Store 間での石のやり取りが一番難しい。
逆に言えば、この部分のロジックを切り出すことが一つの目標になる。
後からもっといいロジックが浮かんでも、影響が最小限になるようにしたい。

### Marble~Field のステート管理

難しい。
とりあえず安直に、最高階層である Board 視点に立って、木構造の一つのデカいステートにしてみることにする。
もう一案としては、ある程度の領域に切り分けたうえで、お互いのステートを協調的に参照・更新しあうような構造。ただパッと実装イメージがつかないのと、がんばって作っても後の改修が辛そうなのとでとりあえず避けた。
