import { atom } from "recoil";
import { Tag } from "../models/Tag";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const tagAtom = atom({
  key: "tag",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const tagListAtom = atom({
  key: "tag-list",
  default: [] as Tag[],
  effects_UNSTABLE: [persistAtom],
});
