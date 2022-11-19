import { useRecoilValue, useSetRecoilState } from "recoil";
import { bucketsAtom, DimpleId, dimpleSelector } from "./states";

export const useDimple = ({ id }: { id: DimpleId }) => {
  // TODO
  const bucket = useRecoilValue(dimpleSelector(id));
  const setBuckets = useSetRecoilState(bucketsAtom);

  const sow = () => {
    setBuckets((prev) => {
      // TODO 種蒔き処理
      // dimpleIdのdimpleに入っている石の数だけ、nextを追って増やす
      const sourceDimpleIndex = prev.findIndex((b) => b.id === id);
      const sourceDimple = prev.find((b) => b.id === id);
      // 配分する石の数
      const distributeCount = sourceDimple?.marbles.length || 0;

      // HACK めちゃくそ無理くりな処理をしている感
      const distributedIndices = Array.from({ length: distributeCount })
        .map((_, idx) => idx + 1)
        .map((increment) =>
          sourceDimpleIndex + increment >= prev.length
            ? sourceDimpleIndex + increment - prev.length
            : sourceDimpleIndex + increment
        );

      const after = prev.map((b, idx) => {
        // sourceなら空にする
        if (b.id === id) return { ...b, marbles: [] };
        // distribute先ならインクリメント
        if (distributedIndices.includes(idx))
          return { ...b, marbles: [...b.marbles, { color: "blue" }] };
        // 上記以外ならそのまま
        return { ...b };
      });
      return after;
    });
  };

  return { bucket, sow };
};
