import {
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { ROUTES } from "../routes/routes";
import { AiOutlineDashboard } from "react-icons/ai";

export default {
  route: {
    path: "/",
    routes: [
      {
        path: "/dashboard",
        name: "Dashboard",
        icon: <AiOutlineDashboard />,
      },
      ,
      {
        path: "/",
        name: "Common",
        icon: <BankOutlined />,
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
