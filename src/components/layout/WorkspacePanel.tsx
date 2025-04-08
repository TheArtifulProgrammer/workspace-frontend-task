import Tabs from "../ui/Tabs";
import DataTable from "../ui/DataTable";
import { tableData } from "../../data/mockData";

interface WorkspacePanelProps {
  title: string;
  tabsConfig: { id: string; label: string }[];
}

export default function WorkspacePanel({
  title,
  tabsConfig,
}: WorkspacePanelProps) {
  // Create tabs with actual content
  const tabs = tabsConfig.map((tab) => {
    let content;

    if (tab.id === "table") {
      content = <DataTable columns={tableData.columns} rows={tableData.rows} />;
    } else {
      content = (
        <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-md">
          <p className="text-gray-600 dark:text-gray-300">
            {tab.label} content goes here. This is a placeholder for the{" "}
            {tab.label.toLowerCase()} tab.
          </p>
        </div>
      );
    }

    return {
      id: tab.id,
      label: tab.label,
      content,
    };
  });

  return (
    <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm overflow-hidden">
      <div className="px-4 md:px-6 py-3 md:py-4 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-base md:text-lg font-medium text-gray-900 dark:text-white">
          {title}
        </h2>
      </div>
      <div className="p-3 md:p-6">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
