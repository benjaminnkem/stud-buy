"use client";
import { tabs } from "@/lib/data/vendor";
import { VendorTag } from "@/lib/types";
import { useState } from "react";
import Menu from "./tab-content/menu";
import { AnimatePresence } from "framer-motion";

const VendorContent = () => {
  const [currentTab, setCurrentTab] = useState<VendorTag>("menu");

  const renderContent = (): JSX.Element | null => {
    switch (currentTab) {
      case "menu":
        return <Menu />;
      default:
        return null;
    }
  };

  return (
    <div className="container py-20 space-y-12">
      <div className="flex items-center justify-center gap-7 select-none">
        {tabs.map((tab, id) => (
          <div
            className={`cursor-pointer px-3 py-2 border-b font-bold duration-300 ${
              tab.tag === currentTab ? "text-deepRed border-deepRed" : "text-zinc-400 hover:text-zinc-500"
            }`}
            key={id}
            onClick={() => setCurrentTab(tab.tag)}
          >
            {tab.name}
          </div>
        ))}
      </div>

      <div>
        <AnimatePresence mode="wait" initial={false}>
          {renderContent()}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VendorContent;
