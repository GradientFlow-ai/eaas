import { useState, useContext } from "react";

import "styles/globals.css";

import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import cx from "classnames";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";

import { baseAppState, AppContext, ContextApp, useFetchFiles } from "state";

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const [theme, setTheme] = useState(ContextApp.theme);
  const [appState, setAppState] = useState(ContextApp.appState);

  const appContext = {
    theme,
    setTheme,
    appState,
    setAppState,
  };

  useFetchFiles();

  return (
    <SessionProvider session={session}>
      <AppContext.Provider value={appContext}>
        <div className={cx(sfPro.variable, inter.variable)}>
          <Component {...pageProps} />
        </div>
      </AppContext.Provider>
      <Analytics />
    </SessionProvider>
  );
}
