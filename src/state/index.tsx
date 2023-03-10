import { themes, Theme, Themes } from "./ThemeContext";
import { ContextApp, AppContext } from "./appContext";
import { baseAppState } from "./appState";

import { usePageState, usePageTheme } from "./hooks";

export {
  baseAppState,
  AppContext,
  themes,
  ContextApp,
  usePageState,
  usePageTheme,
};
export type { Theme, Themes };
