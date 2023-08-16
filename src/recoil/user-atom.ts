import { atom } from "recoil";
import { User } from "../models/User";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const userAtom = atom({
  key: "user",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const userListAtom = atom({
  key: "user-list",
  default: [] as User[],
  effects_UNSTABLE: [persistAtom],
});
