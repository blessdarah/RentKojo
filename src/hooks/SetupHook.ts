import { useSetRecoilState } from "recoil";
import { categoryListAtom } from "../recoil/category-atom";
import { CategoryService } from "../services/CategoryService";
import { TagService } from "../services/TagService";
import { tagListAtom } from "../recoil/tag-atom";
import { productListAtom } from "../recoil/product-atom";
import { ProductService } from "../services/ProductService";
import { storeListAtom } from "../recoil/store-atom";
import { StoreService } from "../services/StoreService";

export const useSetup = () => {
  const setCategories = useSetRecoilState(categoryListAtom);
  const setTags = useSetRecoilState(tagListAtom);
  const setProducts = useSetRecoilState(productListAtom);
  const setStores = useSetRecoilState(storeListAtom);

  const setDefaultStates = async () => {
    try {
      const catResponse = await CategoryService.list();
      setCategories(catResponse.data);

      const tagResponse = await TagService.list();
      setTags(tagResponse.data);

      const productResponse = await ProductService.list();
      setProducts(productResponse.data);

      const storeResponse = await StoreService.list();
      setStores(storeResponse.data);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  return {
    setDefaultStates,
  };
};
