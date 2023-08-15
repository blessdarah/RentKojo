import {
  UserOutlined,
  CrownFilled,
  HomeOutlined,
  AppstoreOutlined,
  FormOutlined,
  ProfileOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { ROUTES } from "../routes/routes";

export default {
  route: {
    path: "/",
    routes: [
      {
        path: "/dashboard",
        name: "Home",
        icon: <HomeOutlined />,
      },
      ,
      {
        path: "/academic",
        name: "Academic",
        icon: <BankOutlined />,
        routes: [
          {
            path: "/products",
            name: "Products",
            icon: <UserOutlined />,
          },
          {
            path: "/",
            name: "Academic Years",
            icon: <UsergroupAddOutlined />,
          },
          {
            path: "/",
            name: "Classes",
            icon: <UserOutlined />,
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
  appList: [
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      title: "Ant Design",
      desc: "Manager",
      url: "https://ant.design",
    },
    {
      icon: "https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",
      title: "AntV",
      desc: "Store",
      url: "https://antv.vision/",
      target: "_blank",
    },
    {
      icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
      title: "Pro Components",
      desc: "Sheets",
      url: "https://procomponents.ant.design/",
    },
    {
      icon: "https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png",
      title: "Job 2",
      desc: "home",
      url: "https://umijs.org/zh-CN/docs",
    },

    {
      icon: "https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png",
      title: "Job",
      desc: "home",
      url: "https://qiankun.umijs.org/",
    },
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",
      title: "Work",
      desc: "home",
      url: "https://www.yuque.com/",
    },
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg",
      title: "Kitchen ",
      desc: "sketch",
      url: "https://kitchen.alipay.com/",
    },
    {
      icon: "https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png",
      title: "password",
      desc: "passwords",
      url: "https://d.umijs.org/zh-CN",
    },
  ],
};
