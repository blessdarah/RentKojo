import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AppLayoutProvider } from "./context-hooks/AppLayoutContext";
import { AppModalProvider } from "./context-hooks/AppModelContext";
import { appRouter } from "./routes/app-routes";
import { App, ConfigProvider } from "antd";
import enUS from "antd/locale/en_US";
import dayjs from "dayjs";

dayjs().locale("en");

export default function MyApp() {
  return (
    <RecoilRoot>
      <ConfigProvider
        locale={enUS}
        theme={{
          token: {
            colorPrimary: "rgb(45 212 191)",
          },
        }}
      >
        <App>
          <AppModalProvider>
            <AppLayoutProvider>
              <RouterProvider router={appRouter} />
            </AppLayoutProvider>
          </AppModalProvider>
        </App>
      </ConfigProvider>
    </RecoilRoot>
  );
}
