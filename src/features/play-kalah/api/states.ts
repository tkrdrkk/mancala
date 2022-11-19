import { atom, selector, selectorFamily } from "recoil";

export type MarbleView = { color: string };
export type Owner = "your" | "opponents";

export type DimpleId = `${Owner}Dimple${string}`;
export type StoreId = `${Owner}Store${string}`;
export type BucketId = DimpleId | StoreId;
type DimpleView = {
  id: BucketId;
  marbles: MarbleView[];
};
type FieldView = {
  dimples: DimpleView[];
};
type StoreView = {
  id: BucketId;
  marbles: MarbleView[];
};
type TerritoryView = { store: StoreView; field: FieldView };
export type BoardView = {
  yourTerritory: TerritoryView;
  opponentsTerritory: TerritoryView;
};

// StoreとDimpleを数珠つなぎの配列にするための型。ロジック上でしか現れない
type DimpleAsBucket = DimpleView;
type StoreAsBucket = StoreView;
type Bucket = DimpleAsBucket | StoreAsBucket;
type Buckets = Bucket[];

const generateStore = (owner: Owner): Bucket => ({
  id: `${owner}Store`,
  marbles: [],
});
const yourStore = generateStore("your");
const opponentsStore = generateStore("opponents");
const generateDimples = (owner: Owner): Buckets =>
  Array.from({ length: 6 })
    .map((_, idx) => idx)
    .map((dimidx) => ({
      id: `${owner}Dimple${dimidx.toString()}`,
      marbles: Array.from({ length: 3 }).map((el, maridx) => ({
        // id: `${owner}Marble${dimidx.toString()}-${maridx.toString()}`,
        color: "blue",
      })),
    }));
const opponentsDimples = generateDimples("opponents");
const yourDimples = generateDimples("your");
// TODO
export const defaultBucketsAtom: Buckets = [
  // プレイヤーのstoreから反時計回りに生成
  yourStore,
  ...opponentsDimples.reverse(),
  opponentsStore,
  ...yourDimples,
];

export const bucketsAtom = atom<Buckets>({
  key: "marbleLocations",
  default: defaultBucketsAtom,
});

export const dimpleSelector = selectorFamily<DimpleView, DimpleId>({
  key: "dimple",
  get:
    (dimpleId) =>
    ({ get }) => {
      const buckets = get(bucketsAtom);
      const dimple = buckets.find((b) => b.id === dimpleId);
      return dimple || ({} as DimpleView); // FIXME 適当実装、直したい
    },
});
export const storeSelector = selectorFamily<StoreView, StoreId>({
  key: "store",
  get:
    (storeId) =>
    ({ get }) => {
      const buckets = get(bucketsAtom);
      const store = buckets.find((b) => b.id === storeId);
      // HACK なんかあったらとりあえず空配列
      return store || ({} as StoreView); // FIXME 適当実装、直したい
    },
});

// ロジック上の配置を元に、View用の型に変換
export const boardViewSelector = selector<BoardView>({
  key: "boardView",
  get: ({ get }) => {
    // TODO この辺で変換処理
    const buckets = get(bucketsAtom);
    return {
      yourTerritory: {
        store: buckets.find((b) => b.id === "yourStore") || {
          id: "yourStore",
          marbles: [],
        },
        field: {
          dimples: buckets.filter((b) => b.id.startsWith("yourDimple")),
        },
      },
      opponentsTerritory: {
        store: buckets.find((b) => b.id === "opponentsStore") || {
          id: "opponentsStore",
          marbles: [],
        },
        field: {
          dimples: buckets.filter((b) => b.id.startsWith("opponentsDimple")),
        },
      },
    };
  },
});
