import { createContext, FC, useState, useContext, useEffect } from "react";

interface IAppLayoutContext {
  layout: "side" | "top";
  setLayout: (value: "side" | "top") => void;
}

export const AppLayoutContext = createContext<IAppLayoutContext | {}>({});

type Props = {
  children?: React.ReactNode;
};

export const AppLayoutProvider: FC<Props> = ({ children }) => {
  const [layout, setLayout] = useState<"side" | "top">("side");

  useEffect(() => {}, [layout]);

  return (
    <AppLayoutContext.Provider
      value={{
        layout,
        setLayout,
      }}
    >
      {children}
    </AppLayoutContext.Provider>
  );
};

export const useAppLayout = () =>
  useContext<IAppLayoutContext>(AppLayoutContext as any);
