import { useState, useEffect, useContext, useMemo } from "react";
import { Transition } from "@headlessui/react";

import { Layout } from "components/layout";
import { ThemeContext, themes } from "state";

import { Sidebar, ThemeToggle } from "components/shared/Sidebar";

function Dashboard() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => setTheme(themes.dashboard), [setTheme]);

  return (
    <Layout bgColor={theme.bgColor}>
      <div
        className={`relative flex py-${
          showSidebar ? "4" : "0"
        } h-screen w-screen justify-start space-x-4 `}
      >
        <Transition
          show={showSidebar}
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
            showSidebar ? "4" : "0"
          } flex-1 rounded-l-lg bg-opacity-30 bg-clip-padding
         shadow bg-${theme.bgColor}-${theme.profile}`}
        >
          <div className="flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;

function Navbar({
  setShowSidebar,
  theme,
}: {
  setShowSidebar: Function,
  theme: any,
}) {
  const value = useContext(ThemeContext);

  return (
    <div
      className={`flex w-full items-center justify-between rounded px-4 py-2 bg-${theme.bgColor}-${theme.main}`}
    >
      <BurgerMenu setShowSidebar={setShowSidebar} />

      <nav className="hidden space-x-8 px-8 py-2 sm:flex">
        {["Home", "About", "Features", "Service", "Contact"].map((a, idx) => {
          return <div key={idx}>{a}</div>;
        })}
      </nav>
    </div>
  );
}

const BurgerMenu = ({ setShowSidebar }: { setShowSidebar: Function }) => (
  <svg
    onClick={() => setShowSidebar((s: boolean) => !s)}
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
);
