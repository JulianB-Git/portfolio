import "./landing.scss";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import Me from "../../img/me.png";
import Me1 from "../../img/nice.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import Light from "../../img/light-new.svg";
import Dark from "../../img/dark-new.svg";
import Background from "../../img/background.jpg";

const Landing = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div
      className="landing"
      style={{
        background: theme.state.darkMode
          ? `url(${Dark}) center center / cover no-repeat`
          : `url(${Light}) center center / cover no-repeat`,
      }}
    >
      <nav className="navbar">
        <div className="logo">
          <h1>JulianDev</h1>
        </div>
        <div className="icons">
          <a
            href="https://github.com/JulianB-Git"
            style={{ color: theme.state.darkMode && "white" }}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/julian-benade96/"
            target="_blank"
            rel="noreferrer"
            style={{ color: theme.state.darkMode && "white" }}
          >
            <FiLinkedin />
          </a>
        </div>
        <div className="settings" onClick={handleClick}>
          {theme.state.darkMode ? <FiSun /> : <FiMoon />}
        </div>
      </nav>
      <div className="content">
        <div className="left">
          <div className="wrapper">
            <h2 className="heading">Hello, my name is</h2>
            <h1 className="name">Julian Benade</h1>
            <div className="title">
              <div className="title-wrapper">
                <div className="title-item">Software Developer</div>
                <div className="title-item">QA Automation Engineer</div>
                <div className="title-item">Overall fun guy</div>
              </div>
            </div>
            <p className="description">
              I specializing in creating automation frameworks, mordern web
              solutions and I'm an advocate for delivering quality.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="item">
            {/* <img src={Me1} alt="" className="image" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
