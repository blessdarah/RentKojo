import { atom } from "recoil";
import { Category, emptyCategory } from "../models/Category";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const categoryAtom = atom({
  key: "category",
  default: emptyCategory,
  effects_UNSTABLE: [persistAtom],
});

export const categoryListAtom = atom({
  key: "category-list",
  default: [] as Category[],
  effects_UNSTABLE: [persistAtom],
});
