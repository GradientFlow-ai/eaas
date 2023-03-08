import { createContext } from "react";

import { themes, Theme, ThemeOption, Themes } from "./ThemeContext";
import { baseAppState } from "./appState";

export { baseAppState, AppContext, themes, ContextApp };
export type { Theme, ThemeOption, Themes };

const ContextApp = {
  appState: {
    ...baseAppState,
  },
  theme: {
    currentTheme: "landing",
    ...themes,
  },
  setTheme: (t: string) => {},
  setAppState: (a: typeof baseAppState) => {},
};

const AppContext = createContext(ContextApp);
