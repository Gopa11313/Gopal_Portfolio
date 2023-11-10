import React from "react";
import Contactcss from "../../../styles/Contactcss.css";
import Location2 from "../../../assests/location2.png";
import email from "../../../assests/email.png";
import linkedin from "../../../assests/linkedin.png";
import github from "../../../assests/github.png";
function ContactPage() {
  return (
    <div className="contact" id="contact">
      <p className="contactTitle">Contact Me</p>
      <div className="contactContent">
        <div className="insideContent first">
          <p className="contentTitle">Contact Information</p>
          <p className="contentDescription">
            Fill up the details in the form to reach me.
          </p>
          <div className="infomation">
            <p className="text">
              <img src={Location2} alt="Location" />
              Toronto, Canada
            </p>
            <p className="text">
              <img src={email} alt="email" />
              gopalaa9819525993@gmail.com
            </p>
          </div>
          <dib className="logos">
            <img src={linkedin} alt="linkdin" />
            <img src={github} alt="github" />
          </dib>
          <div className="contactFooter">
            <p className="footerText">Copyright@2023 portfolio.</p>
            <div className="verticalBar"></div>
            <p className="footerText">All rights reserved.</p>
          </div>
        </div>
        <div className="insideContent">
          <p className="secondTitle"> Interested in working with me?</p>
          <div className="form">
            <div className="firstRow">
              <div className="formField" style={{ marginRight: "10px" }}>
                <label>Name</label>
                <input placeholder="Name" />
              </div>
              <div className="formField" style={{ marginLeft: "10px" }}>
                <label>Email</label>
                <input placeholder="email" />
              </div>
            </div>
            <div className="secondRow">
              <label>Message</label>
              <input placeholder="Message" />
            </div>
            <button className="getInTouchBtn">Get In Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
