import { atom } from "recoil";
import { User } from "../models/User";

export const userAtom = atom({
  key: "user",
  default: undefined,
});

export const userListAtom = atom({
  key: "user-list",
  default: [] as User[],
});
