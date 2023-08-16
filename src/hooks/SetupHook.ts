import { useSetRecoilState } from "recoil";
import { categoryListAtom } from "../recoil/category-atom";
import { CategoryService } from "../services/CategoryService";

export const useSetup = () => {
  const setCategories = useSetRecoilState(categoryListAtom);
  const setDefaultStates = async () => {
    try {
      const catResponse = await CategoryService.list();
      setCategories(catResponse.data);
      console.log("dat: ", catResponse.data);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  return {
    setDefaultStates,
  };
};
