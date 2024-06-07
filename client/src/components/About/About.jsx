import "./About.css";
import VerticalLine from "../../assets/verticalLine.svg";
import IronManImage from "../../assets/ironMan.svg";
import CrossDivider from "../../assets/crossDivider.svg";
import DBATULogo from "../../assets/BATU_logo.png";
import GGULogo from "../../assets/ggu.svg";
import ChateLogo from "../../assets/chate-logo.png";
import UpGradLogo from "../../assets/upgrad-color.png";
import UdemyLogo from "../../assets/udemy-color.webp";
import NullClassLogo from "../../assets/null-class.webp";
import OasisInfobyte from "../../assets/oasis.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="top-about-content">
        <div className="top-left">
          <h1>Who is Sakshi? </h1>
          <p>Turning ideas into digital solutions.</p>
        </div>

        <div className="top-right">
          <img src={VerticalLine} alt="vertical-line" />
          <div className="right-div">
            <p>built for</p>
            <h1>Packetful</h1>
          </div>
          <img src={VerticalLine} alt="vertical-line" />
          <div className="right-div">
            <p>built for</p>
            <h1>Opportunity</h1>
          </div>
        </div>
      </div>
      <div className="main-about-content">
        <div className="left-box">
          <h1>A Curiosity driven</h1>
          <h1 className="color">Full-Stack Developer</h1>
          <p>
            I architect the MERN Stack engine <br />
            that powers your trading platform,
            <br />
            making it as invincinle & adaptable as Iron Man himself.
          </p>
        </div>
        <div className="middle-box">
          <img
            src={IronManImage}
            alt="iron-man-image"
            width="85%"
            height="85%"
          />
          <div className="one-div">
            <img src={DBATULogo} alt="dbatu-logo" width="60%" height="70%" />
            <p style={{ color: "#294a70", lineHeight: "1rem" }}>
              DBATU University
            </p>
            <div className="card-body-1">
              <p>
                BTech in:
                <br />
                Computer Science Engineering
              </p>
            </div>
          </div>
          <div className="two-div">
            <img
              src={GGULogo}
              alt="ggu-logo"
              style={{
                borderRadius: "0.2rem",
                padding: "1rem 1rem",

                backgroundColor: "#003468",
                width: "90%",
                height: "60%",
              }}
            />
            <div className="card-body-2">
              <p>
                Bootcamp: <br />
                Full-Stack Developement-JavaScript
              </p>
            </div>
          </div>
          <div className="three-div">
            <img
              src={ChateLogo}
              alt="chate-logo"
              style={{
                width: "70%",
                height: "60%",
              }}
            />
            <div className="card-body-3">
              <p>
                HSC in: <br />
                PCMB Branch
              </p>
            </div>
          </div>
        </div>
        <div className="right-box">
          <h1>3+</h1>
          <p className="para">Years of Experience</p>
          <img src={CrossDivider} alt="cross-divider-image" />
          <p>
            With Computer Science Engineering <br /> including Programming, DSA{" "}
            <br /> and MERN Stack
          </p>
        </div>
      </div>
      <div className="end-box">
        <p>WORK WITH</p>
        <div className="work-card">
          <img width="10%" height="20%" src={UpGradLogo} alt="upgard-logo" />
          <img width="10%" height="20%" src={UdemyLogo} alt="udemy-logo" />
          <img
            width="10%"
            height="40%"
            src={NullClassLogo}
            alt="nullclass-logo"
          />
          <img width="8%" height="10%" src={OasisInfobyte} alt="oasis-logo" />
        </div>
      </div>
    </div>
  );
};

export default About;
