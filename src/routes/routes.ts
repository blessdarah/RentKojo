export const ROUTES = {
  DEFAULT: "/",
  DASHBOARD: "/dashboard",
  AUTH: {
    LOGIN: "/login",
    SIGNUP: "/signup",
    FORGOT_PASSWORD: "forgot-password",
    RESET_PASSWORD: "reset-password",
  },
  STORES: {
    INDEX: "/stores",
    SHOW: "/stores/:id",
  },
  PRODUCTS: {
    INDEX: "/products",
    SHOW: "/products/:id",
  },
  CATEGORIES: {
    INDEX: "/categories",
    SHOW: "/categories/:id",
  },
  TAGS: {
    INDEX: "/tags",
    SHOW: "/tags/:id",
  },
  SETTINGS: {
    USER: "/settings/user",
    PROFILE: "/settings/profile/:userId",
  },
};
