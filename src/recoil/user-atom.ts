import { atom } from "recoil";
import { User } from "../models/User";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const userAtom = atom<User>({
  key: "user",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const userListAtom = atom<User[]>({
  key: "user-list",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
