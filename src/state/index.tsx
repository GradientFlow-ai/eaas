import { themes, Theme, Themes } from "./ThemeContext";
import { ContextApp, AppContext } from "./appContext";
import { baseAppState } from "./appState";
import {
  SignInModalContext,
  useSignInModalContext,
} from "./signInModalContext";

import {
  useIncrementProperty,
  usePageState,
  usePageTheme,
  useSetAppState,
} from "./hooks";
import useFetchFiles from "./useFetchFiles";

export {
  baseAppState,
  AppContext,
  themes,
  ContextApp,
  SignInModalContext,
  useIncrementProperty,
  useSignInModalContext,
  useFetchFiles,
  usePageState,
  usePageTheme,
  useSetAppState,
};
export type { Theme, Themes };
