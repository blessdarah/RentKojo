import { atom } from "recoil";
import { Product } from "../models/Product";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const productAtom = atom({
  key: "product",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const productListAtom = atom({
  key: "product-list",
  default: [] as Product[],
  effects_UNSTABLE: [persistAtom],
});
