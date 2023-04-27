import { themes, Theme, Themes } from "./ThemeContext";
import { ContextApp, AppContext } from "./appContext";
import { baseAppState } from "./appState";

import { usePageState, usePageTheme, useSetAppState } from "./hooks";
import useFetchFiles from "./useFetchFiles";

export {
  baseAppState,
  AppContext,
  themes,
  ContextApp,
  useFetchFiles,
  usePageState,
  usePageTheme,
  useSetAppState,
};
export type { Theme, Themes };
