import { atom, useRecoilState } from "recoil";
import { Score } from "../types";

const yourScoreAtom = atom<Score>({
  key: "yourScore",
  default: { totalPoint: 0 },
});
const opponentsScoreAtom = atom<Score>({
  key: "opponentsScore",
  default: { totalPoint: 0 },
});

export const useScore = () => {
  const [yourScore, setYourScore] = useRecoilState(yourScoreAtom);
  const [opponentsScore, setOpponentsScore] =
    useRecoilState(opponentsScoreAtom);

  const addYourScore = (incremental: number) => {
    if (incremental <= 0) throw new Error("specify positive number.");
    setYourScore((prev) => ({
      ...prev,
      totalPoint: prev.totalPoint + incremental,
    }));
  };
  const addOpponentsScore = (incremental: number) => {
    if (incremental <= 0) throw new Error("specify positive number.");
    setOpponentsScore((prev) => ({
      ...prev,
      totalPoint: prev.totalPoint + incremental,
    }));
  };

  return {
    yourScore,
    addYourScore,
    opponentsScore,
    addOpponentsScore,
  };
};
