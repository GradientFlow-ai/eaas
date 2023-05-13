export const baseAppState: AppState = {
  generalState: {
    isSidebarOpen: false,
    currentTheme: "landing",
    s3FileInfo: [],
    totalDownloads: 0,
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
