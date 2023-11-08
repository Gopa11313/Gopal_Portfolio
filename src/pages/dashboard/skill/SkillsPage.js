import React, { useState } from "react";
import SkillCss from "../../../styles/Skillscss.css";
import { useTabs, TabPanel } from "react-headless-tabs";
export default function SkillsPage() {
  const [value, setValue] = React.useState("1");

  const [selectedTab, setSelectedTab] = useTabs([
    "Language",
    "Frameworks",
    "IDE",
    "Database",
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const TabSelector = ({ isActive, children, onClick }) => (
    <div className="tabItem">
      <button
        className={`${isActive ? "active" : "inActive"}`}
        onClick={onClick}
      >
        {children}
      </button>
      <span className={`${isActive ? "span-active" : "span-inActive"}`} />
    </div>
  );
  return (
    <div className="skillPage">
      <p className="skillTitle">My skills</p>
      <div className="SkillContent">
        <div className="tabs">
          <TabSelector
            isActive={selectedTab === "Language"}
            onClick={() => setSelectedTab("Language")}
          >
            Language
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "Frameworks"}
            onClick={() => setSelectedTab("Frameworks")}
          >
            Frameworks
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "IDE"}
            onClick={() => setSelectedTab("IDE")}
          >
            IDE
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "Database"}
            onClick={() => setSelectedTab("Database")}
          >
            Database
          </TabSelector>
        </div>
      </div>
      <div>
        <TabPanel hidden={selectedTab !== "Language"}>Language</TabPanel>
        <TabPanel hidden={selectedTab !== "Frameworks"}>Frameworks</TabPanel>
        <TabPanel hidden={selectedTab !== "IDE"}>IDE</TabPanel>
        <TabPanel hidden={selectedTab !== "Database"}>Billing</TabPanel>
      </div>
    </div>
  );
}
