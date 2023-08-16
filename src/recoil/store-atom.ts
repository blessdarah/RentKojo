import { atom } from "recoil";
import { Store } from "../models/Store";

export const storeAtom = atom({
  key: "store",
  default: undefined,
});

export const storeListAtom = atom({
  key: "store-list",
  default: [] as Store[],
});
