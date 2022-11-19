import { useRecoilValue } from "recoil";
import { StoreId, storeSelector } from "./states";

export const useStore = ({ id }: { id: StoreId }) => {
  // TODO
  const store = useRecoilValue(storeSelector(id));
  return store;
};
