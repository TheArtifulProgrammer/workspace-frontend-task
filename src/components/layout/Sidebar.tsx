import { menuItems } from '../../data/mockData';

export default function Sidebar() {
  return (
    <div className="h-full w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors">
      <div className="flex items-center h-16 px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="font-semibold text-xl text-gray-900 dark:text-white">Workspace</div>
      </div>
      
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}