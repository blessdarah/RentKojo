import { atom } from "recoil";
import { Product } from "../models/Product";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const productAtom = atom<Product>({
  key: "product",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const productListAtom = atom<Product[]>({
  key: "product-list",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
