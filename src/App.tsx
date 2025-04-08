import { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "./context/theme";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import WorkspacePanel from "./components/layout/WorkspacePanel";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  // Handle click outside to close sidebar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        window.innerWidth < 1024 // Only on mobile/tablet
      ) {
        setSidebarOpen(false);
      }
    }
    // Add click event listener
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar with ref */}
          <div
            ref={sidebarRef}
            className={`
              fixed inset-y-0 left-0 z-30 w-64 
              transform transition-transform duration-300 ease-in-out
              bg-white dark:bg-gray-900 shadow-lg
              lg:relative lg:translate-x-0 lg:z-0
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <Sidebar />
          </div>

          <main className="flex-1 p-4 md:p-6 overflow-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
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
