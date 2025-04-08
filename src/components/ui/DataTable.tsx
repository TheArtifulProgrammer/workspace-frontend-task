interface DataTableProps {
  columns: string[];
  rows: { id: number; data: string[] }[];
}

export default function DataTable({ columns, rows }: DataTableProps) {
  return (
    <div className="overflow-x-auto -mx-3 px-3 md:mx-0 md:px-0">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="px-2 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                {/* Show shorter column names on mobile */}
                <span className="md:hidden">{column.substring(0, 3)}</span>
                <span className="hidden md:inline">{column}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {row.data.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm whitespace-nowrap ${
                    cellIndex === 0
                      ? "font-medium text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400"
                  } ${
                    cellIndex === 2 && cell.startsWith("+")
                      ? "text-green-600 dark:text-green-400"
                      : ""
                  } 
                    ${
                      cellIndex === 2 && cell.startsWith("-")
                        ? "text-red-600 dark:text-red-400"
                        : ""
                    }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
