import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AppLayoutProvider } from "./context-hooks/AppLayoutContext";
import { AppModalProvider } from "./context-hooks/AppModelContext";
import { appRouter } from "./routes/app-routes";

export default function App() {
  return (
    <RecoilRoot>
      <AppModalProvider>
        <AppLayoutProvider>
          <RouterProvider router={appRouter} />
        </AppLayoutProvider>
      </AppModalProvider>
    </RecoilRoot>
  );
}
