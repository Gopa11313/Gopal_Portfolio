import React, { useState } from "react";
import SkillCss from "../../../styles/Skillscss.css";
import { TabPanel, useTabs } from "react-headless-tabs";
// import { TabSelector } from "../../../components/TabSelector";
export default function SkillsPage() {
  const [selectedTab, setSelectedTab] = useTabs([
    "account",
    "company",
    "team",
    "billing",
  ]);
  function TabSelector({ isActive, children, onClick }) {
    return (
      <button
        className={`mr-8 group inline-flex items-center px-2 py-4 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap ${
          isActive
            ? "border-indigo-500 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
            : "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300"
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return (
    <div className="skillPage">
      <p className="skillTitle">My skills</p>
      <nav className="border-b border-gray-300">
        <TabSelector
          isActive={selectedTab === "account"}
          onClick={() => setSelectedTab("account")}
        >
          My Account
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "company"}
          onClick={() => setSelectedTab("company")}
        >
          Company
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "team"}
          onClick={() => setSelectedTab("team")}
        >
          Team Members
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "billing"}
          onClick={() => setSelectedTab("billing")}
        >
          Billing
        </TabSelector>
      </nav>
      <div className="p-4">
        <TabPanel hidden={selectedTab !== "account"}>My Account</TabPanel>
        <TabPanel hidden={selectedTab !== "company"}>Company</TabPanel>
        <TabPanel hidden={selectedTab !== "team"}>Team Members</TabPanel>
        <TabPanel hidden={selectedTab !== "billing"}>Billing</TabPanel>
      </div>
    </div>
  );
}
