import { atom } from "recoil";
import { Store } from "../models/Store";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const storeAtom = atom<Store>({
  key: "store",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const storeListAtom = atom<Store[]>({
  key: "store-list",
  default: [] as Store[],
  effects_UNSTABLE: [persistAtom],
});
