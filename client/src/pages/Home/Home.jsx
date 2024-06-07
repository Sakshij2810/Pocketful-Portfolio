import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Acheivemets from "../../components/Acheivements/Acheivemets";
import ContactMe from "../../components/ContactMe/ContactMe";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="home-content">
        <div id="header">
          <Header />
        </div>
        <div id="aboutMe">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="acheivements">
          <Acheivemets />
        </div>
        <div id="contactMe">
          <ContactMe />
        </div>
      </div>
      <footer>
        <a href="https://www.linkedin.com/in/sakshjadhav/">
          {" "}
          <LinkedInIcon /> Linkedin
        </a>
        <a href="https://github.com/Sakshij2810">
          {" "}
          <GitHubIcon /> GitHub
        </a>
        <a href="sakshi2020jadhav@gmail.com">
          {" "}
          <EmailIcon /> Gmail
        </a>
      </footer>
    </div>
  );
};

export default Home;
