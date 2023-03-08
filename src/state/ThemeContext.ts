import { createContext } from "react";

export const themes = {
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
    bgColor: "indigo",
    name: "dark",
    main: 700,
    profile: 400,
    notify: 200,
    text: 100,
  },
  dashboard: {
    bgColor: "indigo",
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

export type Theme = typeof themes.light;

export type ContextTheme = {
  theme: Theme;
  setTheme: Function;
};

export const ThemeContext = createContext({} as ContextTheme);
