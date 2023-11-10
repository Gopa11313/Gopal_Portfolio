import React from "react";
import Projectcss from "../../../styles/Projectscss.css";
import qpay_logo from "../../../assests/qpay_logo.png";
import kotlin_icon from "../../../assests/kotlin_icon.png";
import java_icon from "../../../assests/java_icon.png";
import swift_icon from "../../../assests/swift_icon.png";
import github from "../../../assests/github.png";
import link from "../../../assests/link.png";
import smartQr from "../../../assests/smartQr.png";
import qpayMerchant from "../../../assests/qpay_merchant.png";
import PlanIt from "../../../assests/planIt.png";
import reactNative from "../../../assests/react_icon.png";
function ProjectPage() {
  const featuredProject = [
    {
      logo: qpay_logo,
      name: "Que pay",
      description:
        "QPay consumer App allows its users easily make payments for the goods purchased and services rendered. Quick recharge and easy payment of various utility bills and on top of that consumers can also transfer the small value fund to the consumers within QPay network.",
      liveUrl:
        "https://play.google.com/store/apps/details?id=net.qpaysolutions.QPay&hl=en_CA&gl=US",
      toolAndTech: [
        { name: "Java", icon: java_icon },
        { name: "Swift", icon: swift_icon },
      ],
      githubUrl: "",
    },
    {
      logo: smartQr,
      name: "Smart Qr",
      description:
        "SmartQR is a QR based payment solution for merchants in the interoperable network to facilitate the digital payment and mobile payment that delivers a common QR code specification for retails payment in Nepal. SmartQR facilitates merchants, especially SMEs, in using QR codes to accept payments in a fast secure and reliable digital payment ecosystem integrated with different payment service providers.",
      liveUrl:
        "https://play.google.com/store/apps/details?id=net.qpaysolutions.smartqr&hl=en&gl=US",
      toolAndTech: [
        { name: "Java", icon: java_icon },
        { name: "Swift", icon: swift_icon },
      ],
      githubUrl: "",
    },
    {
      logo: qpayMerchant,
      name: "Q Pay Merchant",
      description:
        "QPay Merchant App provides unique and powerful tools for merchants to process payments using their mobile phones. It provides an opportunity for supplemental revenue as well as to promote itself within the QPay ecosystem.",
      liveUrl:
        "https://play.google.com/store/apps/details?id=net.qpaysolutions.QPayMerchant&hl=en_CA&gl=US",
      toolAndTech: [
        { name: "Java", icon: java_icon },
        { name: "Swift", icon: swift_icon },
      ],
      githubUrl: "",
    },
    {
      logo: PlanIt,
      name: "PlanIt",
      description:
        "QPay consumer App allows its users easily make payments for the goods purchased and services rendered. Quick recharge and easy payment of various utility bills and on top of that consumers can also transfer the small value fund to the consumers within QPay network.",
      liveUrl:
        "https://play.google.com/store/apps/details?id=net.qpaysolutions.QPay&hl=en_CA&gl=US",
      toolAndTech: [{ name: "React Native", icon: reactNative }],
      githubUrl: "",
    },
  ];
  return (
    <div className="projects" id="myProjects">
      <div className="projectsContent">
        <p className="projectsTitle">Featured Project</p>
        <div className="gridParent">
          <div className="project-grid-container">
            {featuredProject.map((post, index) => (
              <div key={index} className="project-grid-item">
                <div className="iconDiv">
                  <img src={post.logo} alt={post.logo} />
                </div>
                <div className="descriptionDiv">
                  <p className="postName">{post.name}</p>
                  <p className="postDescription">{post.description}</p>
                  <div className="toolDiv">
                    <p className="postName">Tool</p>
                    <div className="toolsTechnologies">
                      {post.toolAndTech.map((icon, index) => (
                        <div key={index} className="toolItem">
                          <img src={icon.icon} alt="icon" />
                          <p className="itemText">{icon.name}</p>
                        </div>
                      ))}
                    </div>
                    <div className="itemFooter">
                      <div className="itemFooterItem">
                        <img src={github} />
                        <p className="itemFooterItem">View code</p>
                      </div>
                      <div
                        className="itemFooterItem"
                        style={{ marginRight: "10px" }}
                      >
                        <img src={link} />
                        <p className="itemFooterItem">Live Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="toggle-display-button">View More</p>
        </div>
      </div>
    </div>
  );
}
export default ProjectPage;
