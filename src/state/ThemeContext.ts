export const themes: Themes = {
  light: {
    bgColor: "indigo",
    name: "light",
    main: 100,
    profile: 400,
    notify: 600,
    text: 700,
  },
  dark: {
    bgColor: "indigo",
    name: "dark",
    main: 700,
    profile: 400,
    notify: 200,
    text: 100,
  },
  landing: {
    bgColor: "to-cyan-100",
    name: "dark",
    main: 700,
    profile: 400,
    notify: 200,
    text: 100,
  },
  dashboard: {
    bgColor: "to-rose-200",
    name: "dark",
    main: 700,
    profile: 400,
    notify: 200,
    text: 100,
  },
  sidebar: {
    bgColor: "indigo",
    name: "dark",
    main: 700,
    profile: 400,
    notify: 200,
    text: 100,
  },
};

export type Theme = {
  bgColor: string,
  name: string,
  main: number,
  profile: number,
  notify: number,
  text: number,
};

export type ThemeOption = keyof Themes;

export interface Themes {
  [pageName: string]: Theme;
}
