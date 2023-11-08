import React, { useState } from "react";
import SkillCss from "../../../styles/Skillscss.css";
import { useTabs, TabPanel } from "react-headless-tabs";
import KotlinImage from "../../../assests/kotlin_image.png";
import JavaImage from "../../../assests/java_image.png";
import PythonImage from "../../../assests/python_image.png";
import SwiftImage from "../../../assests/swift_image.png";
export default function SkillsPage() {
  const [value, setValue] = React.useState("1");

  const [selectedTab, setSelectedTab] = useTabs([
    "Language",
    "Frameworks",
    "IDE",
    "Database",
  ]);
  const languages = [
    { name: "Kotlin", image: KotlinImage },
    { name: "Java", image: JavaImage },
    { name: "Python", image: PythonImage },
    { name: "Swift", image: SwiftImage },
    { name: "Java", image: JavaImage },
    { name: "Python", image: PythonImage },
    { name: "Python", image: PythonImage },
    { name: "Python", image: PythonImage },
    { name: "Python", image: PythonImage },
    { name: "Python", image: PythonImage },
  ];

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
      <div className="contentPanel">
        <TabPanel hidden={selectedTab !== "Language"}>
          <div className="scrolling-wrapper-flexbox">
            {languages.map((language, index) => (
              <div key={language} className="card">
                <img src={language.image} alt={language.name} />
                <p className="cardName">{language.name}</p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "Frameworks"}>Frameworks</TabPanel>
        <TabPanel hidden={selectedTab !== "IDE"}>IDE</TabPanel>
        <TabPanel hidden={selectedTab !== "Database"}>Billing</TabPanel>
      </div>
    </div>
  );
}
