import "./ProjectCard.css";

const ProjectCard = ({ image, title, info }) => {
  return (
    <div className="product-card-container">
      <div className="image-box">
        <img src={image} />
      </div>
      <div className="content-box">
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
