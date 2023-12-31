import { atom } from "recoil";
import { Category, emptyCategory } from "../models/Category";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const categoryAtom = atom<Category>({
  key: "category",
  default: emptyCategory,
  effects_UNSTABLE: [persistAtom],
});

export const categoryListAtom = atom<Category[]>({
  key: "category-list",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
