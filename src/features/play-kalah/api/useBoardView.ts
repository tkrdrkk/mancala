import { useRecoilValue, useSetRecoilState } from "recoil";
import { BoardView, boardViewSelector, bucketsAtom } from "./states";

export type UseBoardViewType = {
  boardView: BoardView;
  sow: (dimpleId: string) => void;
};

export const useBoardView = (): UseBoardViewType => {
  const setBuckets = useSetRecoilState(bucketsAtom);
  const boardView = useRecoilValue(boardViewSelector);

  // TODO 種蒔き処理
  const sow = (dimpleId: string) => {
    setBuckets((prev) => {
      return { ...prev };
    });
  };
  return {
    boardView,
    sow,
  };
};
