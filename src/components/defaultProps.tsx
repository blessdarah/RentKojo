import {
  SettingOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineGift,
  AiOutlineTag,
} from "react-icons/ai";
import { ROUTES } from "../routes/routes";

export default {
  route: {
    path: "/",
    routes: [
      {
        path: "/dashboard",
        name: "Dashboard",
        icon: <AiOutlineDashboard />,
      },
      {
        path: "/products",
        name: "Products",
        icon: <AiOutlineGift />,
      },
      {
        path: "/",
        name: "Tags & Categories",
        icon: <AiOutlineTag />,
        routes: [
          {
            path: ROUTES.CATEGORIES.INDEX,
            name: "Categories",
            icon: <UserOutlined />,
          },
          {
            path: ROUTES.TAGS.INDEX,
            name: "Tags",
            icon: <UsergroupAddOutlined />,
          },
        ],
      },
      {
        path: "/settings",
        name: "Settings",
        icon: <SettingOutlined />,
        routes: [
          {
            path: ROUTES.SETTINGS.USER,
            name: "Users",
            icon: <UserOutlined />,
          },
        ],
      },
    ],
  },
  location: {
    pathname: "/",
  },
  // appList: [],
};
