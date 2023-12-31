import { DashboardPage } from "../pages/DashboardPage";
import { CategoryPage } from "../pages/category/CategoryPage";
import { ProductPage } from "../pages/product/ProductPage";
import { StorePage } from "../pages/store/StorePage";
import { TagPage } from "../pages/tag/TagPage";
import { ROUTES } from "./routes";

export const dashboardRoutes = [
  {
    path: ROUTES.DASHBOARD,
    element: <DashboardPage />,
  },
  {
    path: ROUTES.TAGS.INDEX,
    element: <TagPage />,
  },
  {
    path: ROUTES.CATEGORIES.INDEX,
    element: <CategoryPage />,
  },
  {
    path: ROUTES.STORES.INDEX,
    element: <StorePage />,
  },
  {
    path: ROUTES.PRODUCTS.INDEX,
    element: <ProductPage />,
  },
];
