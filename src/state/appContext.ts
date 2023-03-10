import { createContext } from "react";

import { themes, Themes } from "./ThemeContext";
import { baseAppState } from "./appState";

const ContextApp = {
  appState: {
    ...baseAppState,
  },
  theme: themes,
  setTheme: (t: Themes) => {},
  setAppState: (a: typeof baseAppState) => {},
};

const AppContext = createContext(ContextApp);

export { ContextApp, AppContext }
