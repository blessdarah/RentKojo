import { LoginPage } from "../pages/auth/LoginPage";
import { SignupPage } from "../pages/auth/SignupPage";
import { ROUTES } from "./routes";

export const authRoutes = [
  {
    path: ROUTES.AUTH.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTES.AUTH.SIGNUP,
    element: <SignupPage />,
  },
  {
    path: ROUTES.AUTH.RESET_PASSWORD,
    element: <LoginPage />,
  },
  {
    path: ROUTES.AUTH.FORGOT_PASSWORD,
    element: <LoginPage />,
  },
];
