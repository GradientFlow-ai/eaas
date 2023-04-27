import { useCallback, useContext } from "react";
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


const useSetAppState = () => {
  const { appState, setAppState } = useContext(AppContext);

  const updateAppState = useCallback((state: any, page?: string) => {
    const pageKey = page || 'generalState';
    setAppState((prevState: any) => {
      const subState = prevState[pageKey];
      const newState = { ...subState, ...state };
      return { ...prevState, [pageKey]: newState };
    });
  }, [setAppState]);

  return updateAppState;
};

export { usePageState, usePageTheme, useSetAppState };
