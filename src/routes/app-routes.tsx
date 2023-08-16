import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import { LoginPage } from "../pages/auth/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { dashboardRoutes } from "./dashboard-routes";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },

  ...dashboardRoutes,
]);
