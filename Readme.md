## Code Beauty

### Component の責務

#### atoms

- 汎用的な機能を提供する
- ドメイン知識を持たない
- Global State や Context へのアクセス禁止 ※1
- 他のコンポーネントに依存しない ※2
- 自分自身で状態はなるべく持たない

※1 theme のコンテキスト依存はしょうがない
※2 [styled()](https://mui.com/customization/how-to-customize/#2-reusable-style-overrides)で UI ライブラリーのコンポーネントを包むのは OK

#### Molecules

- 汎用的な機能を提供する
- ドメイン知識を持たない
- Global State や Context へのアクセス禁止 ※1
- 他の Atoms や Molecules のコンポーネントに依存している
- 自分自身で状態はなるべく持たない

※1 theme のコンテキスト依存はしょうがない

#### Organisms

- ドメイン知識を持つ
- Global State や Context による
- 非同期処理を実行していい

#### Templates

- ロジックを持たない
- pages コンポーネントからのみ呼ばれる

#### 参照

- [React で実装する atomic design のコンポーネントごとの責務の分け方とコード規約](https://qiita.com/takano-h/items/8731d8e7413d7b1f6d7b)
