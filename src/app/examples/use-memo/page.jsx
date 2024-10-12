"use client";

import { useState, useMemo } from "react";
import { TABS } from "./mock-data";
import Button from "@/components/Button";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const activeTabContent = useMemo(() => {
    return TABS.find((tab) => tab.id === activeTab)?.data || [];
  }, [activeTab]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 border-b-2 border-gray-200">
        {TABS.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            isActive={tab.id === activeTab}
          >
            {tab.id}
          </Button>
        ))}
      </div>
      <div className="mt-4">
        {activeTabContent.map((item) => (
          <div key={item.id} className="p-2 border-b border-gray-200">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Date: {new Date(item.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;
