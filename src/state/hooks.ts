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

const useIncrementProperty = () => {
  const updateAppState = useSetAppState();

  const incrementProperty = useCallback((property: string, page?: string) => {
    updateAppState((prevState: any) => {
      const pageKey = page || 'generalState';
      const subState = prevState[pageKey];
      const newValue = subState[property] + 1;
      const newState = { ...subState, [property]: newValue };
      return { ...prevState, [pageKey]: newState };
    });
  }, [updateAppState]);

  return incrementProperty;
};

export { usePageTheme, usePageState, useSetAppState, useIncrementProperty };
