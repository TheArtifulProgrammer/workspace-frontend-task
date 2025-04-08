import ThemeToggle from "../ui/ThemeToggle";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors">
      <div className="h-full flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          {/* Hamburger menu for mobile */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md mr-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-1 lg:hidden"
            aria-label="Toggle sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-lg font-medium text-gray-900 dark:text-white">
            Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Hide search on small mobile screens */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-40 md:w-64 px-3 md:px-4 py-1 md:py-2 pr-8 text-sm rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-colors"
            />
            <svg
              className="absolute right-3 top-1.5 md:top-2.5 h-4 w-4 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <ThemeToggle />

          <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    </header>
  );
}
