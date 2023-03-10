import { useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "./appContext";

const usePageTheme = () => {
  const { theme } = useContext(AppContext);

  const { pathname } = useRouter();

  const currentPage = pathname.split("/")[1] || "landing";
  const currentTheme = theme[currentPage];

  return currentTheme;
};

const usePageState = () => {
  const { appState } = useContext(AppContext);

  const { pathname } = useRouter();

  const currentPage = pathname.split("/")[1] || "landing";

    return {...appState.generalState, ...appState[currentPage] }
}

export { usePageState, usePageTheme }
