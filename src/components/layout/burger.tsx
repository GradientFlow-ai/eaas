import { usePageState, usePageTheme, useSetAppState } from "state";

function Navbar() {
  const pageTheme = usePageTheme();

  return (
    <div
      className={`flex w-full items-center justify-between rounded px-4 py-2 bg-${pageTheme.bgColor}-${pageTheme.main}`}
    >
      <BurgerMenu />

      <nav className="hidden space-x-8 px-8 py-2 sm:flex">
        {["Home", "About", "Features", "Service", "Contact"].map((a, idx) => {
          return <div key={idx}>{a}</div>;
        })}
      </nav>
    </div>
  );
}

export const BurgerMenu = () => {
  const { isSidebarOpen } = usePageState();
  const setAppState = useSetAppState();

  const setShowSidebar = () => {
    setAppState({ isSidebarOpen: !isSidebarOpen });
  };

  return (
    <svg
      onClick={() => setShowSidebar()}
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
};
