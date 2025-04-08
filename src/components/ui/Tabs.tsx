import { useState } from "react";

interface TabsProps {
  tabs: { id: string; label: string; content: React.ReactNode }[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-800 overflow-x-auto -mx-3 px-3 md:mx-0 md:px-0">
        <nav className="flex -mb-px whitespace-nowrap" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="py-3 md:py-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
