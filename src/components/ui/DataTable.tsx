interface DataTableProps {
  columns: string[];
  rows: { id: number; data: string[] }[];
}

export default function DataTable({ columns, rows }: DataTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                {column}
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
                  className={`px-6 py-4 whitespace-nowrap text-sm ${
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
