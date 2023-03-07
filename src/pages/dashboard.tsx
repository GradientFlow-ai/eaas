import { useState, useEffect, useContext } from "react";
import { Transition } from "@headlessui/react";

import { Layout } from "@components/layout";

import { ThemeContext, Sidebar, ThemeToggle } from "@components/shared/Sidebar";

function Dashboard() {
  const value = useContext(ThemeContext);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Layout>
      <div
        className={`relative flex py-${
          value.showSidebar ? "4" : "0"
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
         shadow bg-${value.bgColor}-${value.theme.profile}`}
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

function Navbar({ setShowSidebar }) {
  const value = useContext(ThemeContext);

  return (
    <div
      className={`flex w-full items-center justify-between rounded px-4 py-2 bg-${value.bgColor}-${value.theme.main}`}
    >
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
      <nav className="hidden space-x-8 px-8 py-2 sm:flex">
        {["Home", "About", "Features", "Service", "Contact"].map((a, idx) => {
          return <div key={idx}>{a}</div>;
        })}
      </nav>
    </div>
  );
}
