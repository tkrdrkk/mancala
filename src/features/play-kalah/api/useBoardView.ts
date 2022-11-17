import { useRecoilValue, useSetRecoilState } from "recoil";
import { BoardView, boardViewSelector, bucketsAtom } from "./states";

export type UseBoardViewType = {
  boardView: BoardView;
  sow: (dimpleId: string) => void;
};

export const useBoardView = (): UseBoardViewType => {
  const setBuckets = useSetRecoilState(bucketsAtom);
  const boardView = useRecoilValue(boardViewSelector);

  const sow = (dimpleId: string) => {
    setBuckets((prev) => {
      // TODO 種蒔き処理
      // dimpleIdのdimpleに入っている石の数だけ、nextを追って増やす
      const sourceDimpleIndex = prev.findIndex((b) => b.id === dimpleId);
      const sourceDimple = prev.find((b) => b.id === dimpleId);
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
        if (b.id === dimpleId) return { ...b, marbles: [] };
        // distribute先ならインクリメント
        if (distributedIndices.includes(idx))
          return { ...b, marbles: [...b.marbles, { color: "blue" }] };
        // 上記以外ならそのまま
        return { ...b };
      });
      return after;
    });
  };
  return {
    boardView,
    sow,
  };
};
