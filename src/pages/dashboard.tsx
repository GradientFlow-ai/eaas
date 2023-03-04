import React, { useState, useEffect, useContext } from "react";
import { Transition } from "@headlessui/react";

import {
  themes,
  ThemeContext,
  Sidebar,
  ThemeToggle,
} from "@components/shared/Sidebar";

const Dashboard = () => {
  const [theme, setTheme] = useState(themes.dark);
  const [bgColor, setBgColor] = useState("indigo");
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        bgColor,
        showSidebar,
        setShowSidebar,
        theme,
        setTheme,
        setBgColor,
      }}
    >
      <MainLayout />
    </ThemeContext.Provider>
  );
};

export default Dashboard;

function MainLayout() {
  const value = useContext(ThemeContext);

  return (
    <div
      className={`relative flex py-${
        value.showSidebar ? "4" : "0"
      } h-screen w-screen justify-start space-x-4 `}
    >
      <Transition
        show={value.showSidebar}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Sidebar />
      </Transition>

      <div
        className={`flex w-full flex-col p-${
          value.showSidebar ? "4" : "0"
        } flex-1 rounded-l-lg bg-opacity-30 bg-clip-padding
         shadow bg-${value.bgColor}-${value.theme.profile}`}
      >
        <Navbar />
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const value = useContext(ThemeContext);

  return (
    <div
      className={`flex w-full items-center justify-between rounded px-4 py-2 bg-${value.bgColor}-${value.theme.main}`}
    >
      <svg
        onClick={() => value.setShowSidebar((s: boolean) => !s)}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
      <nav className="hidden space-x-8 px-8 py-2 sm:flex">
        {["Home", "About", "Features", "Service", "Contact"].map((a, idx) => {
          return <div key={idx}>{a}</div>;
        })}
      </nav>
    </div>
  );
}
