import { atom } from "recoil";
import { Product } from "../models/Product";

export const productAtom = atom({
  key: "product",
  default: undefined,
});

export const productListAtom = atom({
  key: "product-list",
  default: [] as Product[],
});
