import { useState } from "react";

const tabs = [
  { id: "world", label: "World" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" }
];

export default function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-1 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "bg-blue-500" : "hover:opacity-50"
            } rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 focus-visible:outline`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <div className="h-5 w-5 rounded-full bg-red-500" />
      </div>
    </div>
  );
}
