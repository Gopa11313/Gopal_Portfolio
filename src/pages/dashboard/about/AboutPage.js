import React from "react";
import HomeCss from "../../../styles/Aboutcss.css";
import edit from "../../../assests/edit.png";
import location from "../../../assests/location.png";
function AboutPage() {
  return (
    <div className="aboutPage" id="abouot">
      <p className="aboutTitle">About me</p>
      <div className="aboutContent">
        <div className="aboutContentTop">
          <p className="aboutTexts">
            <span>
              <img src={edit} alt="Edit" />
            </span>
            Gopal thapa magar
          </p>
          <p className="aboutTexts">
            Based in Toronto, Canada
            <span>
              <img src={location} alt="location" />
            </span>
          </p>
        </div>
        <p className="aboutDescription">
          With a Bachelor's Degree in Computer Science and 3 years of experience
          as a Developer, I possess a strong foundation in software development
          with expertise in programming languages including Kotlin, Java, and
          Swift. My experience includes designing, coding, debugging, and
          testing software solutions, collaborating with the team and clients to
          meet project requirements, and developing efficient software solutions
          that meet client needs. Overall, my qualifications and experience make
          me a valuable asset to any software development team
        </p>
      </div>
      <button className="cvButton">Download CV</button>
    </div>
  );
}
export default AboutPage;
