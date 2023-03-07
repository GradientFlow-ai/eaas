import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import cx from "classnames";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import { themes, ThemeContext, ThemeToggle } from "@components/shared/Sidebar";

import { useState, useEffect, useContext } from "react";

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
  const [theme, setTheme] = useState(themes.dark);
  const [bgColor, setBgColor] = useState("indigo");

  return (
    <SessionProvider session={session}>
      <ThemeContext.Provider
        value={{
          bgColor,
          setBgColor,
          theme,
          setTheme,
        }}
      >
        <div className={cx(sfPro.variable, inter.variable)}>
          <Component {...pageProps} />
        </div>
      </ThemeContext.Provider>
      <Analytics />
    </SessionProvider>
  );
}
