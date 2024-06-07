import "./ContactMe.css";
import ContactImg from "../../assets/waitListBg_LG1.webp";
import WaitListLine from "../../assets/waitListLine.svg";

import W1 from "../../assets/waitBg/w1.svg";
import W2 from "../../assets/waitBg/w2.svg";
import W3 from "../../assets/waitBg/w3.svg";
import W4 from "../../assets/waitBg/w4.svg";

import W from "../../assets/waitBg/w.svg";
import WW from "../../assets/waitBg/ww.svg";
import WWW from "../../assets/waitBg/www.svg";
import WWWW from "../../assets/waitBg/wwww.svg";

const ContactMe = () => {
  return (
    <div className="contact-container">
      <div className="contact-img">
        <img width="100%" height="100%" src={ContactImg} alt="contact-image" />
      </div>

      <div className="conatct-content">
        <div className="benefits-box">
          <div className="benefit-txt">
            <h1>Benefits of</h1>
            <h1 className="benefit-h1">Hiring Me</h1>
          </div>
          <div className="benefit-cards">
            <div className="card-1">
              <img src={W2} alt="w2" />
              <div className="ben-card-cont-1">
                <img src={W} alt="w" />
                <h1>Cost-Effective</h1>
                <p>
                  {" "}
                  One developer, full expertise. This means you save money on
                  hiring and managing separate front-end and back-end teams.
                </p>
              </div>
            </div>
            <div className="card-2">
              <img src={W1} alt="w1" />
              <div className="ben-card-cont-2">
                <img src={WW} alt="ww" />
                <h1>Streamlined Communication</h1>
                <p> smoother discussions and faster troubleshooting.</p>
              </div>
            </div>
            <div className="card-3">
              <img src={W4} alt="w4" />
              <div className="ben-card-cont-3">
                <img src={WWW} alt="www" />
                <h1>Faster Project Completion</h1>
                <p>
                  {" "}
                  I can switch tasks seamlessly, accelerating development and
                  quickly fixing integration issues.
                </p>
              </div>
            </div>
            <div className="card-4">
              <img src={W3} alt="w3" />
              <div className="ben-card-cont-4">
                <img src={WWWW} alt="wwww" />
                <h1>Improved Project Ownership</h1>
                <p>
                  {" "}
                  Their holistic view fosters strong ownership, leading to
                  better problem-solving and a cohesive final product.
                </p>
              </div>
            </div>
          </div>
          <div className="benefit-divider"></div>
        </div>
        <div className="form-box">
          <img src={WaitListLine} alt="wait-list-line" />
          <h1>Contact Me</h1>
          <form>
            <label htmlFor="name">
              <p>Enter Your Full Name</p>
              <input id="name" name="name" type="text" />
            </label>
            <label htmlFor="email">
              <p>Enter Your Email</p>
              <input id="email" name="email" type="email" />
            </label>
            <label htmlFor="message">
              <p>Enter Your Message</p>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
              ></textarea>
            </label>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
