import "./Navbar.css";
import SLogo from "../../assets/partnerPocketfulLogo.svg";

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <div className="logo-container">
        <img src={SLogo} alt="s-logo" width="30rem" height="30rem" />
        <h3>SakshiJadhav</h3>
      </div>
      <ul>
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#aboutMe">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#acheivements">Acheivements</a>
        </li>
        <li>
          <a href="#contactMe">Contact Me</a>
        </li>
      </ul>

      <a
        href="https://drive.google.com/file/d/1QYnVCpLhov5CdfoKlXhQqtkIFQdPh03v/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="nav-btn">Resume</button>
      </a>
    </nav>
  );
};

export default Navbar;
