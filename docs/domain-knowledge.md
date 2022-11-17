## マンカラを nextjs アプリで実装する

## 仕様

https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%B3%E3%82%AB%E3%83%A9

https://www.afsgames.com/mancala.htm
※これ遊べばいいんじゃねというのは禁句

## 用語

| term(en)   | term(ja)   | org | description                                                                                |
| ---------- | ---------- | --- | ------------------------------------------------------------------------------------------ |
| Mancala    | マンカラ   | yes | このゲームの名前。                                                                         |
| Kalah      | カラハ     | yes | 代表的なルール。                                                                           |
| Player     | プレイヤー | yes | 自分と相手。                                                                               |
| Board      | ボード     | no  | ゲームをプレイする領域。                                                                   |
| Marble     | 石         | yes | プレイヤーが取り合う資産。                                                                 |
| Territory  | テリトリー | no  | プレイヤーの陣地。Field と Store を合わせた領域。                                          |
| Field      | フィールド | no  | Dimple の集合。畑。                                                                        |
| Store      | ストア     | yes | プレイヤーが石を最終的に溜め込む場所。                                                     |
| Dimple     | 穴         | yes | 石が置かれ、動かされる場所。                                                               |
| Bucket     | バケツ     | no  | 石が置かれうる領域。Store と Dimple の総称。あくまで比喩。                                 |
| Sow(ing)   | 種蒔き     | yes | プレイヤーが石を動かすこと。元々置いてある穴から、反時計回りに一つずつ隣の穴へ移動させる。 |
| Distribute | ばら撒く   | no  | 一つずつばら撒くこと                                                                       |
| Lap        | ラップ     | yes | 手番。Sowing を 1 回以上行う。                                                             |
