export const baseAppState: AppState = {
  generalState: {
    isSidebarOpen: false,
    currentTheme: "landing",
  },
  landing: {
    shouldShowBurger: false,
  },
  dashboard: {
    shouldShowBurger: true,
  },
};

// TODO fix
interface AppState {
  [key: string]: any;
}
