import { DashboardPage } from "../pages/DashboardPage";
import { CategoryPage } from "../pages/category/CategoryPage";
import { ROUTES } from "./routes";

export const dashboardRoutes = [
  {
    path: ROUTES.DASHBOARD,
    element: <DashboardPage />,
  },
  {
    path: ROUTES.TAGS.INDEX,
    element: <DashboardPage />,
  },
  {
    path: ROUTES.CATEGORIES.INDEX,
    element: <CategoryPage />,
  },
  {
    path: ROUTES.STORES.INDEX,
    element: <DashboardPage />,
  },
  {
    path: ROUTES.PRODUCTS.INDEX,
    element: <DashboardPage />,
  },
];
