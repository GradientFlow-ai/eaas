import { Transition } from "@headlessui/react";

import { usePageState, usePageTheme } from "state";

import { Layout } from "components/layout";
import { Sidebar, ThemeToggle } from "components/shared/Sidebar";

function Dashboard() {
  const pageTheme = usePageTheme();
  const { isSidebarOpen, currentTheme } = usePageState();

  return (
    <Layout>
      <div
        className={`relative flex py-${
          isSidebarOpen ? "4" : "0"
        } h-screen w-screen justify-start space-x-4 `}
      >
        <Transition
          show={isSidebarOpen}
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
            isSidebarOpen ? "4" : "0"
          } flex-1 rounded-l-lg bg-opacity-30 bg-clip-padding
         shadow bg-${pageTheme.bgColor}-${pageTheme.profile}`}
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
