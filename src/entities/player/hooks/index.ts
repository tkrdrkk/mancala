import { atom, useRecoilValue } from "recoil";
import { Player } from "../types";

const youAtom = atom<Player>({
  key: "you",
  default: { id: crypto.randomUUID(), name: "you" },
});
const opponentAtom = atom<Player>({
  key: "opponent",
  default: { id: crypto.randomUUID(), name: "opponent" },
});
export const usePlayers = () => {
  const you = useRecoilValue(youAtom);
  const opponent = useRecoilValue(opponentAtom);

  return {
    you,
    opponent,
  };
};
