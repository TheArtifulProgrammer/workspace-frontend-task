import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors">
      <div className="h-full flex items-center justify-between px-6">
        <h1 className="text-lg font-medium text-gray-900 dark:text-white">
          Dashboard
        </h1>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 pr-8 text-sm rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-colors"
            />
            <svg
              className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-500"
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