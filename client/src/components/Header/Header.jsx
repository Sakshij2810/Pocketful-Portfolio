import "./Header.css";

import BackgroundImage from "../../assets/background.svg";
import Banner from "../../assets/waitBg/banner.png";

const Header = () => {
  return (
    <header className="header-container">
      <img src={BackgroundImage} alt="background-image" />

      <div className="header-content">
        <p className="big-txt">I&#39;m a Full-stack Web Developer</p>

        <div className="animated-text">
          <span className="static-txt">#ExpertiseIn</span>

          <ul className="dynamic-txt">
            <li>
              <span>React.JS</span>
            </li>
            <li>
              <span>Node.JS</span>
            </li>
            <li>
              <span>Express.JS</span>
            </li>
            <li>
              <span>MongoDB</span>
            </li>
          </ul>
        </div>

        <p className="long-txt">
          I&#39;m driven by the opportunity to use technology to create
          meaningful solutions to real-world problems.
        </p>
        <a href="#projects">
          {" "}
          <button className="home-btn">Check My Work</button>
        </a>
        <div className="banner-img">
          <img src={Banner} alt="banner" />
        </div>
      </div>
    </header>
  );
};

export default Header;
