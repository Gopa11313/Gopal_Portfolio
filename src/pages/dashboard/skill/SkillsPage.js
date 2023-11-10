import React, { useState } from "react";
import SkillCss from "../../../styles/Skillscss.css";
import { useTabs, TabPanel } from "react-headless-tabs";
import KotlinImage from "../../../assests/kotlin_image.png";
import JavaImage from "../../../assests/java_image.png";
import PythonImage from "../../../assests/python_image.png";
import SwiftImage from "../../../assests/swift_image.png";
import React_icon from "../../../assests/react_icon.png";
import Node_icon from "../../../assests/nodejs_icon.png";
import Nestjs_icon from "../../../assests/nestjs_icon.png";
import spring_boot from "../../../assests/spring_boot.png";
import anroid_jetpack from "../../../assests/android_jetpack_compose.png";
import mvvm from "../../../assests/mvvm.png";
import android from "../../../assests/andorid_icon.png";
import xCode from "../../../assests/x_code_icon.png";
import visualStudio from "../../../assests/visual_studio_code_icon.png";
import pycharm from "../../../assests/pycharm_icon.png";
import mySql from "../../../assests/mySql_icon.png";
import mongodb from "../../../assests/mongodb_icon.png";
import sql from "../../../assests/sql_icon.png";
import neo4j from "../../../assests/neo4j_icon.png";
import azure from "../../../assests/azure.png";
import aws from "../../../assests/aws_icon.png";
import firebase from "../../../assests/firebase_icon.png";
import kochava from "../../../assests/kochava_icon.png";
export default function SkillsPage() {
  const [value, setValue] = useState("");

  const [selectedTab, setSelectedTab] = useTabs([
    "Language",
    "Frameworks/Architecture",
    "IDE",
    "Database",
    "Services",
  ]);
  const languages = [
    { name: "Kotlin", image: KotlinImage },
    { name: "Java", image: JavaImage },
    { name: "Python", image: PythonImage },
    { name: "Swift", image: SwiftImage },

    { name: "Node Js", image: Node_icon },

    { name: "React Js", image: React_icon },
  ];
  const frameWorks = [
    { name: "Springboot", image: spring_boot },
    { name: "Jetpack Compose", image: anroid_jetpack },
    { name: "MVVM/MVC/..", image: mvvm },
    { name: "Nest Js", image: Nestjs_icon },
    { name: "React Native", image: React_icon },
  ];

  const Ide = [
    { name: "Android Studio", image: android },
    { name: "XCode", image: xCode },
    { name: "Visual Studio", image: visualStudio },
    { name: "PyCharm", image: pycharm },
  ];
  const Database = [
    { name: "MySql", image: mySql },
    { name: "MongoDb", image: mongodb },
    { name: "Sql", image: sql },
    { name: "Neo4j", image: neo4j },
    { name: "Firebase", image: firebase },
  ];
  const Services = [
    { name: "Azure", image: azure },
    { name: "AWS", image: aws },
    { name: "Firebase", image: firebase },
    { name: "Kochava", image: kochava },
  ];
  const defaultDisplayCount = 4;
  const [displayCount, setDisplayCount] = useState(defaultDisplayCount); // Initial number of displayed items

  const handleToggleDisplay = () => {
    if (displayCount === defaultDisplayCount) {
      if (selectedTab === "Language") {
        setDisplayCount(languages.length); // Show all items
      } else if (selectedTab === "Frameworks/Architecture") {
        setDisplayCount(frameWorks.length);
      } else if (selectedTab === "IDE") {
        setDisplayCount(Ide.length);
      } else if (selectedTab === "Database") {
        setDisplayCount(Database.length);
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
          <TabSelector
            isActive={selectedTab === "Services"}
            onClick={() => setSelectedTab("Services")}
          >
            Services
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
                    <p className="imageNames">{language.name}</p>
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
          {selectedTab === "IDE" ? (
            <div className="panelItem">
              <div className="grid-container">
                {Ide.slice(0, displayCount).map((ide, index) => (
                  <div key={index} className="grid-item">
                    <img src={ide.image} alt={ide.name} />
                    <p>{ide.name}</p>
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
        <TabPanel hidden={selectedTab !== "Database"}>
          {selectedTab === "Database" ? (
            <div className="panelItem">
              <div className="grid-container">
                {Database.slice(0, displayCount).map((database, index) => (
                  <div key={index} className="grid-item">
                    <img src={database.image} alt={database.name} />
                    <p>{database.name}</p>
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
        <TabPanel hidden={selectedTab !== "Services"}>
          {selectedTab === "Services" ? (
            <div className="panelItem">
              <div className="grid-container">
                {Services.slice(0, displayCount).map((service, index) => (
                  <div key={index} className="grid-item">
                    <img src={service.image} alt={service.name} />
                    <p>{service.name}</p>
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
      </div>
    </div>
  );
}
