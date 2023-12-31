import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import Photo from "../../assets/images/myPhoto.webp";
import Icons from "./icons/index";
import "./index.css";

const Intro = () => {
  const { t } = useTranslation();

  return (
    <div className="introContainer">
      <div className="content">
        <div className="introTitle">
          <h1>{t("IntroTitle")}</h1>
        </div>
        <div data-aos="fade-right" data-aos-duration="1500" className="intro-text">
          <p>{t("IntroText")}</p>
        </div>
        <div className="icons-links">
          <div className="linkedIn">
            <a
              href="https://www.linkedin.com/in/mishael-richardson-3a3a9a253/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="gitLink">
            <a
              href="https://github.com/Mishou23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub /> 
            </a>
          </div>
        </div>
        <Icons />
      </div>
      <div className="myPhoto">
        <img src={Photo} alt="Web Developer Mishael Richardson"></img>
      </div>
    </div>
  );
};

export default Intro;
