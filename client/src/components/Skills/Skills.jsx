import "./Skills.css";
import SkillImage from "../../assets/homeBasketBG.svg";

import Html from "../../assets/skills/html.png";
import Css from "../../assets/skills/css.png";
import Javascript from "../../assets/skills/javascript.png";
import CLogo from "../../assets/skills/c.png";
import Java from "../../assets/skills/java.png";
import Git from "../../assets/skills/git.png";
import Windows from "../../assets/skills/windows.png";

import Express from "../../assets/skills/express.png";
import Github from "../../assets/skills/github.png";
import Linux from "../../assets/skills/linux.png";
import Macos from "../../assets/skills/macos.png";
import Mongodb from "../../assets/skills/mongodb.png";
import Node from "../../assets/skills/node.png";
import React from "../../assets/skills/react.png";

import styled, { keyframes, css } from "styled-components";

const Skills = () => {
  const row1 = [Html, Css, Java, Javascript, CLogo, Git, Windows];
  const row2 = [Express, Github, Linux, Macos, Mongodb, Node, React];
  return (
    <div className="skill-container">
      <img className="skill-image" src={SkillImage} alt="skill-image" />

      <div className="skill-content">
        <div className="top-skill-content">
          <h1>
            Skills & <span>Tools</span>{" "}
          </h1>
          <div className="skill-para">
            <p>My Toolbox and things I Can Do.</p>
            <p>
              The Skills, Tools & Technologies I&#39;ll use to bring your
              products to life:
            </p>
          </div>

          <a href="https://www.linkedin.com/in/sakshjadhav/">
            <button className="skill-btn">See My Skills</button>
          </a>
        </div>
        <div className="bottom-skill-content">
          {/* wrapper1 */}
          <Marquee>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup key={el}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup key={el}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>

          {/* wrapper2 */}
          <Marquee>
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup key={el}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup key={el}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;

// const AppContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
//   color: #000000;

//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const Marquee = styled.div`
  display: flex;

  width: 80rem;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  margin: 1rem 0.5rem;
  width: 36rem;

  ${
    "" /* width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10); */
  }
`;

const Image = styled.img`
  background-color: white;
  object-fit: contain;
  width: 15rem;
  height: 9rem;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
