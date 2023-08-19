import { atom } from "recoil";
import { Tag } from "../models/Tag";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const tagAtom = atom<Tag>({
  key: "tag",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const tagListAtom = atom<Tag[]>({
  key: "tag-list",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
