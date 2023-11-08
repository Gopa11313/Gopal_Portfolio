import React, { useState } from "react";
import SkillCss from "../../../styles/Skillscss.css";
import { useTabs, TabPanel } from "react-headless-tabs";
import KotlinImage from "../../../assests/kotlin_image.png";
import JavaImage from "../../../assests/java_image.png";
import PythonImage from "../../../assests/python_image.png";
import SwiftImage from "../../../assests/swift_image.png";
export default function SkillsPage() {
  const [value, setValue] = useState("");

  const [selectedTab, setSelectedTab] = useTabs([
    "Language",
    "Frameworks/Architecture",
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
  const frameWorks = [{ name: "jabdas", image: KotlinImage }];
  const defaultDisplayCount = 4;
  const [displayCount, setDisplayCount] = useState(defaultDisplayCount); // Initial number of displayed items

  const handleToggleDisplay = () => {
    if (displayCount === defaultDisplayCount) {
      if (selectedTab === "Language") {
        setDisplayCount(languages.length); // Show all items
      } else if (selectedTab === "Frameworks/Architecture") {
        setDisplayCount(frameWorks.length);
      }
    } else {
      setDisplayCount(defaultDisplayCount); // Reset to default number of items
    }
  };
  const handleChange = (newValue) => {
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
            onClick={() => {
              setSelectedTab("Language");
              handleChange("Language");
            }}
          >
            Language
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "Frameworks/Architecture"}
            onClick={() => setSelectedTab("Frameworks/Architecture")}
          >
            Frameworks/Architecture
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
        <TabPanel hidden={selectedTab !== "Language"} className="panel">
          {selectedTab === "Language" ? (
            <div className="panelItem">
              <div className="grid-container">
                {languages.slice(0, displayCount).map((language, index) => (
                  <div key={index} className="grid-item">
                    <img src={language.image} alt={language.name} />
                    <p>{language.name}</p>
                  </div>
                ))}
              </div>
              <a
                onClick={handleToggleDisplay}
                className="toggle-display-button"
              >
                {displayCount === defaultDisplayCount
                  ? "View More"
                  : "Show Less"}
              </a>
            </div>
          ) : null}
        </TabPanel>
        <TabPanel
          hidden={selectedTab !== "Frameworks/Architecture"}
          className="panel"
        >
          {selectedTab === "Frameworks/Architecture" ? (
            <div className="panelItem">
              <div className="grid-container">
                {frameWorks.slice(0, displayCount).map((frameWork, index) => (
                  <div key={index} className="grid-item">
                    <img src={frameWork.image} alt={frameWork.name} />
                    <p>{frameWork.name}</p>
                  </div>
                ))}
              </div>
              <a
                onClick={handleToggleDisplay}
                className="toggle-display-button"
              >
                {displayCount === defaultDisplayCount
                  ? "View More"
                  : "Show Less"}
              </a>
            </div>
          ) : null}
        </TabPanel>
        <TabPanel hidden={selectedTab !== "IDE"}>
          <div>
            <a>IDE</a>
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "Database"}>
          <div>
            <a>Database</a>
          </div>
        </TabPanel>
      </div>
    </div>
  );
}
