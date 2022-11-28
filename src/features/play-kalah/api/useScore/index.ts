import { useStore } from "../useStore";

type UseScoreReturnType = {
  yourPoint: number;
  opponentsPoint: number;
  settled: boolean;
  winner: "you" | "opponent" | "draw";
};
export const useScore = (): UseScoreReturnType => {
  const yourStore = useStore({ id: "yourStore" });
  const opponentsStore = useStore({ id: "opponentsStore" });
  const yourPoint = yourStore.marbles.length;
  const opponentsPoint = opponentsStore.marbles.length;

  // HACK ベタ書き
  const settled = yourPoint + opponentsPoint >= 3 * 12;
  const winner =
    yourPoint > opponentsPoint
      ? "you"
      : yourPoint === opponentsPoint
      ? "draw"
      : "opponent";
  return {
    yourPoint,
    opponentsPoint,
    settled,
    winner,
  };
};
