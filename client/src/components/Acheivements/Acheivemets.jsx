import "./Acheivements.css";
import UpGrad from "../../assets/certificate/upgrad.png";
import Udemy from "../../assets/certificate/udemy.png";
import NATA from "../../assets/certificate/nata.png";

const Acheivemets = () => {
  return (
    <div className="acheivements-container">
      <h1>Explore Acheivements</h1>
      <div className="ach-content">
        <div className="item-1">
          <div className="ach-left-div">
            <h1>#Udemy</h1>
            <p>
              Udemy - C Programming: <br /> Become A Pro! Think Like a
              Programmer!
            </p>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://drive.google.com/file/d/1wAnhN5GWQ0WhFkPcwgi6xhaKui3UT8hu/view?usp=sharing"
            >
              <button>View Certificate</button>
            </a>
          </div>
          <div className="ach-img">
            <img width="100%" height="100%" src={Udemy} alt="udemy-cert" />
          </div>{" "}
        </div>
        <div className="item-2">
          <div className="ach-left-div">
            <h1>#UpGrad</h1>
            <p>UpGrad&#39;s Full Stack Development Bootcamp - JavaScript</p>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://drive.google.com/file/d/1JF5T-PBsDFA0ZwGdZr7-WsdJdZOJ0Z7-/view?usp=sharing"
            >
              {" "}
              <button>View Certificate</button>
            </a>
          </div>
          <div className="ach-img">
            <img width="100%" height="100%" src={UpGrad} alt="upgrad-cert" />
          </div>{" "}
        </div>
        <div className="item-3">
          <div className="ach-left-div">
            <h1>#NATA</h1>
            <p>National Aptitude Test in Architecture</p>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://drive.google.com/file/d/1U4j-dWRQ64An7kX6KY8k1vFOC3_D0IAM/view?usp=sharing"
            >
              {" "}
              <button>View Certificate</button>
            </a>
          </div>
          <div className="ach-img">
            <img width="100%" height="100%" src={NATA} alt="nata-cert" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acheivemets;
