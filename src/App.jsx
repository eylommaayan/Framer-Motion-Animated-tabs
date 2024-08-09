import { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="flex flex-col items-center bg-black min-h-screen">
      <div className="flex space-x-1 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:opacity-50"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 transition focus-visible:outline`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0  bg-blue-500"
                style={{borderRadius: 9999,}}
                transition={{type: "spring", duration:0.6}}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

   
    </div>
  );
}
