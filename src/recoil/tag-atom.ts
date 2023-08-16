import { atom } from "recoil";
import { Tag } from "../models/Tag";

export const tagAtom = atom({
  key: "tag",
  default: undefined,
});

export const tagListAtom = atom({
  key: "tag-list",
  default: [] as Tag[],
});
