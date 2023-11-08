import React from "react";
import Contactcss from "../../../styles/Contactcss.css";
import Location2 from "../../../assests/location2.png";
import email from "../../../assests/email.png";
import linkedin from "../../../assests/linkedin.png";
import github from "../../../assests/github.png";
function ContactPage() {
  return (
    <div className="contact">
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
            <img src={linkedin} alt="linkdin" />
          </dib>
          <div>
            <p>Copyright@2023 portfolio.</p>
            <span></span>
            <p>All rights reserved.</p>
          </div>
        </div>
        <div className="insideContent">
          <p> Interested in working with me?</p>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
