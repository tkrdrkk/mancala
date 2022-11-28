import { atom, selectorFamily } from 'recoil';

export type MarbleView = { color: string };
export type Owner = 'your' | 'opponents';

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

const colors = ['blue', 'red', 'yellow', 'green', 'yellowgreen', 'orange', 'grey', 'skyblue'];
const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

const generateStore = (owner: Owner): Bucket => ({
  id: `${owner}Store`,
  marbles: [],
});
const yourStore = generateStore('your');
const opponentsStore = generateStore('opponents');
const generateDimples = (owner: Owner): Buckets =>
  Array.from({ length: 6 })
    .map((_, idx) => idx)
    .map((dimidx) => ({
      id: `${owner}Dimple${dimidx.toString()}`,
      marbles: Array.from({ length: 3 }).map((el) => ({
        color: randomColor(),
      })),
    }));
const opponentsDimples = generateDimples('opponents');
const yourDimples = generateDimples('your');
// TODO
export const defaultBucketsAtom: Buckets = [
  // プレイヤーのstoreから反時計回りに生成
  yourStore,
  ...opponentsDimples.reverse(),
  opponentsStore,
  ...yourDimples,
];

// HACK atom本体のexportを避けたい
export const bucketsAtom = atom<Buckets>({
  key: 'marbleLocations',
  default: defaultBucketsAtom,
});

export const dimpleSelector = selectorFamily<DimpleView, DimpleId>({
  key: 'dimple',
  get:
    (dimpleId) =>
    ({ get }) => {
      const buckets = get(bucketsAtom);
      const dimple = buckets.find((b) => b.id === dimpleId);
      return dimple || ({} as DimpleView); // FIXME 適当実装、直したい
    },
});
export const storeSelector = selectorFamily<StoreView, StoreId>({
  key: 'store',
  get:
    (storeId) =>
    ({ get }) => {
      const buckets = get(bucketsAtom);
      const store = buckets.find((b) => b.id === storeId);
      // HACK なんかあったらとりあえず空配列
      return store || ({} as StoreView); // FIXME 適当実装、直したい
    },
});
