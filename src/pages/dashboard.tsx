import { Layout } from "components/layout";
import { Sidebar } from "components/shared/Sidebar";

function Dashboard() {
  return (
    <Layout>
      <div
        className={`relative flex h-screen w-screen justify-start space-x-4 `}
      >
        <Sidebar />
      </div>
    </Layout>
  );
}

export default Dashboard;

const WrapperWeMayNeed = ({ pageTheme, isSidebarOpen }: any) => (
  <div
    className={`flex w-full flex-col p-${
      isSidebarOpen ? "4" : "0"
    } flex-1 rounded-l-lg bg-opacity-30 bg-clip-padding
         shadow bg-${pageTheme.bgColor}-${pageTheme.profile}`}
  >
    <div className="flex justify-end">content here</div>
  </div>
);
