import React from "react";
import HomeCss from "../../../styles/Homecss.css";
import koltinIcon from "../../../assests/kotlin_icon.png";
import javaIcon from "../../../assests/java_icon.png";
import swiftIcon from "../../../assests/swift_icon.png";
function HomePage() {
  return (
    <div className="homePage">
      <p className="title">Android Developer</p>
      <p className="name">Gopal Thapa M.</p>
      <p className="description">
        <span>TECHNOLOGIES</span> I HAVE BEEN WORKING WITH
      </p>
      <div className="listOfTech">
        <img src={koltinIcon} alt="kotlin" />
        <img src={javaIcon} alt="java" />
        <img src={swiftIcon} alt="swift" />
      </div>
    </div>
  );
}
export default HomePage;
