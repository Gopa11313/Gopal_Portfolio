import * as React from "react";
import ExprienceCss from "../../../styles/Expriencecss.css";
import { Chrono } from "react-chrono";
export default function Exprience() {
  const mappedEvents = [
    {
      title: "April 2023-Present",
      cardTitle: "Android Developer (Full-Stack Developer)",
      cardSubtitle: "Insurdinary Toronto, Canada ",
      cardDetailedText:
        "As a pivotal contributor at Insurdinary, I specialize in strategic app development using Kotlin, Java, and Swift UI, employing the MVVM architecture. Demonstrating technical prowess with Dragger2 and RxJava, I lead the enhancement and support of existing mobile apps, ensuring projects stay within budget and meet deadlines. Collaborating seamlessly with diverse teams and managing virtual machines alongside leveraging Azure services, I optimize operational efficiency. My expertise spans mobile and backend development, guaranteeing seamless app and API solutions using Kotlin, Java, Spring Boot, and Swift UI. With a commitment to MVVM architecture and Dragger2, I deliver scalable, high-quality app solutions, while fostering a collaborative work environment through effective communication and teamwork, consistently enhancing user experiences and functionality and driving continuous improvement initiatives",
    },
    {
      title: "Dec 2020-Dec 2022",
      cardTitle: "Senior Android Developer",
      cardSubtitle: "Que Pay Ptv. Ltd, Kathmandu",
      cardDetailedText:
        "At Que Pay, I played a pivotal role in developing a mobile wallet app that facilitated online payments with merchants, bank fund transfers, and a range of features. My responsibilities included integrating debit, credit, and prepaid cards, QR code-based payments, bill payment systems, chat functionalities, and push notifications using a tech stack comprising Java and Kotlin, along with MVP architecture, Room, Okhttp3, Retrofit, Dragger Hilt, Fabric, Firebase, QR scanner, Google Maps, REST API, jUnit, and Mockito. Notably, I spearheaded the creation of mobile wallets, POS systems, and mobile banking applications, collectively amassing over a million users, marking significant achievements during my tenure at the company.",
    },
    {
      title: "April 2020-Nov 2020",
      cardTitle: "Full-Stack Developer",
      cardSubtitle: "Login Design Ptv. Ltd, Kathmandu",

      cardDetailedText:
        "At Login Design, my role entailed designing both client-side and server-side architectures, contributing to the development of highly interactive websites and mobile applications. I was instrumental in creating APIs using Node.js with MongoDB and overseeing the publishing of websites, APIs, and applications. My responsibilities included shaping robust architecture, fostering interactivity, and deploying these platforms, showcasing a comprehensive skill set in web and mobile app development along with proficiency in Node.js and MongoDB for API creation",
    },
  ];
  return (
    <div className="exprience">
      <div className="exprienceContent">
        <p className="exprienceTitle">Experience</p>
        <Chrono items={mappedEvents} mode="VERTICAL_ALTERNATING"></Chrono>
      </div>
    </div>
  );
}
