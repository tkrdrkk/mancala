ドメイン知識の洗い出し
ドメインオブジェクト、用語の選定

まず UI から作る

## next13 x react-testing-library のバグ

- NG: @testing-library/react-hooks
- OK: @testing-library/react
  import { renderHook } from "@testing-library/react";

ここに書いてある通りの解決方法で完璧
https://zenn.dev/k_kazukiiiiii/articles/9f48bdd20435d2
