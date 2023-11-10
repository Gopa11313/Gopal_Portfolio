import React from "react";
import Projectcss from "../../../styles/Projectscss.css";
import qpay_logo from "../../../assests/qpay_logo.png";
import kotlin_icon from "../../../assests/kotlin_icon.png";
import java_icon from "../../../assests/java_icon.png";
import swift_icon from "../../../assests/swift_icon.png";
import github from "../../../assests/github.png";
import link from "../../../assests/link.png";
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
  ];
  return (
    <div className="projects">
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
