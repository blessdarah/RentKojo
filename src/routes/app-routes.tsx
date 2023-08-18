import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import { dashboardRoutes } from "./dashboard-routes";
import { authRoutes } from "./auth-routes";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  ...authRoutes,
  ...dashboardRoutes,
]);
