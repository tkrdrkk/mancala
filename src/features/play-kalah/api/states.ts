import { atom, selector } from "recoil";

export type MarbleView = {
  // id: string;
  color: string;
};

type BucketId = string;
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

const generateTerritory = (owner: "your" | "opponents") => ({
  store: {
    id: `${owner}Store`,
    marbles: [],
  },
  field: {
    dimples: Array.from({ length: 6 }).map((el, dimidx) => ({
      id: `${owner}Dimple${dimidx.toString()}`,
      marbles: Array.from({ length: 3 }).map((el, maridx) => ({
        id: `${owner}Marble${dimidx.toString()}-${maridx.toString()}`,
        color: "blue",
      })),
    })),
  },
});
// StoreとDimpleを数珠つなぎの配列にするための型。ロジック上でしか現れない
type DimpleAsBucket = DimpleView;
type StoreAsBucket = StoreView;
type Bucket = DimpleAsBucket | StoreAsBucket;
type Buckets = Bucket[];

const generateStore = (owner: "your" | "opponents"): Bucket => ({
  id: `${owner}Store`,
  marbles: [],
});
const yourStore = generateStore("your");
const opponentsStore = generateStore("opponents");
const generateDimples = (owner: "your" | "opponents"): Buckets =>
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
