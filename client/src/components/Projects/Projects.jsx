import "./Projects.css";
import Emoji from "../../assets/emoji.svg";
import BackgroundImg from "../../assets/BackgroundLine.png";
import ProjectCard from "../ProjectCard/ProjectCard";
import Ecommerce from "../../assets/projectsImages/ecommerce.png";
import Rejouice from "../../assets/projectsImages/rejouice.png";
import Stackoverflow from "../../assets/projectsImages/stackoverflow.png";
import Outfit from "../../assets/projectsImages/outfit.png";
import Razorpay from "../../assets/projectsImages/razorpay.png";
import Swarajrise from "../../assets/projectsImages/swarajrise-home.png";
import Recipe from "../../assets/projectsImages/recipe.png";
import Readyfood from "../../assets/projectsImages/readfood.png";
import Attendence from "../../assets/projectsImages/attendence.png";

const Projects = () => {
  let projects = [
    {
      _id: 1,
      image: Ecommerce,
      title: "ECOMMERCE",
      info: "Designed and managed a dynamic e-commerce platform, enhancing user experience through intuitive UI/UX and streamlined checkout processes.",
    },
    {
      _id: 2,
      image: Rejouice,
      title: "Rejouice",
      info: "Designed a visually appealing and responsive interface, enhancing user engagement and satisfaction.",
    },
    {
      _id: 3,
      image: Stackoverflow,
      title: "StackOverflow",
      info: " A leading Q&A platform for developers to find, share, and collaborate on coding solutions and software development knowledge.",
    },
    {
      _id: 4,
      image: Outfit,
      title: "Customize-Outfit",
      info: "Developed a dynamic website for customizing outfits, integrating interactive design tools and real-time previews.",
    },
    {
      _id: 5,
      image: Razorpay,
      title: "Razorpay",
      info: "Integrated Razorpay payment gateway on the website, streamlining secure and efficient transaction processing for enhanced user experience",
    },
    {
      _id: 6,
      image: Swarajrise,
      title: "SwarajRise",
      info: "Designed and maintained a comprehensive construction website, featuring project portfolios, service descriptions, and client testimonials.",
    },
    {
      _id: 7,
      image: Recipe,
      title: "Recipe-Meister",
      info: "Developed a feature that allows users to input, customize, and save their own recipes, enhancing user engagement and personalization.",
    },
    {
      _id: 8,
      image: Readyfood,
      title: "MAX FOODS",
      info: "Developed an eCommerce grocery store using WordPress.",
    },
    {
      _id: 9,
      image: Attendence,
      title: "Attendence Monitoring",
      info: "Developed an Attendance Monitoring System for HOD, Teachers, and Students using the MERN Stack",
    },
  ];
  return (
    <div className="project-container">
      <div className="top-project">
        <div className="project-headline">
          <h1>A Selection of stuff</h1>

          <h1 className="h1-project">I&#39;ve Built.</h1>
        </div>
        <img src={Emoji} alt="emoji-svg" />
      </div>
      <div className="main-project">
        <img src={BackgroundImg} alt="backgroundLine-img" />
        <div className="project-cards">
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://capstone-project-ecommerce-1.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              image={projects[0].image}
              title={projects[0].title}
              info={projects[0].info}
            />
          </a>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://rejoiuce-clone.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              image={projects[1].image}
              title={projects[1].title}
              info={projects[1].info}
            />
          </a>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://stack-overflow-client-eta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              image={projects[2].image}
              title={projects[2].title}
              info={projects[2].info}
            />
          </a>

          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://customized-tshirt-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              image={projects[3].image}
              title={projects[3].title}
              info={projects[3].info}
            />
          </a>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://github.com/Sakshij2810/Attendance-monitoring-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              image={projects[8].image}
              title={projects[8].title}
              info={projects[8].info}
            />
          </a>

          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://compareeviction.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              image={projects[7].image}
              title={projects[7].title}
              info={projects[7].info}
            />
          </a>

          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://drive.google.com/file/d/1TLR-1wbSE084Cffg8-6YjiR9aa1jhCDy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              image={projects[5].image}
              title={projects[5].title}
              info={projects[5].info}
            />
          </a>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://github.com/Sakshij2810/RazorPay-Integration"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              image={projects[4].image}
              title={projects[4].title}
              info={projects[4].info}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
