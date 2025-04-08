import { ThemeProvider } from "./context/theme";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import WorkspacePanel from "./components/layout/WorkspacePanel";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 p-6 overflow-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
              <WorkspacePanel
                title="Market Data"
                tabsConfig={[
                  { id: "table", label: "Markets" },
                  { id: "watchlist", label: "Watchlist" },
                  { id: "overview", label: "Overview" },
                ]}
              />
              <WorkspacePanel
                title="Trading Activity"
                tabsConfig={[
                  { id: "orders", label: "Orders" },
                  { id: "trades", label: "Trades" },
                  { id: "history", label: "History" },
                ]}
              />
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
