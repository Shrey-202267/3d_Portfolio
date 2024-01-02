import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} alt="" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-[#fff] mx-5">
      Hi, I am <span className="font-semibold">Shreyash</span> 👋🏻
      <br />A Web Developer.
    </h1>
  ),
  2: (
    <InfoBox
      text="Work on various projects and picked up various skills along the way."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Completed Various Projects and learned new things from each project and still expanding the knowledge."
      link="/projects"
      btnText="My Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Contact Me if you have any topic to discuss or any project idea in mind."
      link="/contact"
      btnText="Let's Talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
