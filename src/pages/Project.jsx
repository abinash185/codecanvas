import { useLocation } from "react-router-dom";
import { ourWork } from "../utils/Constant";
import "../styles/Project.css";
import CustomSlider from "../components/Slider/CustomSlider";

export default function Project() {
  const location = useLocation();
  const selectedProject = location.pathname.split("/").pop();

  const project = ourWork.works.all.find((p) => {
    return p.title.split(" ").join("_") === selectedProject;
  });

  return (
    <div className="projectContainer">
      <header>
        <figure>
          <img src={project.picture} alt="Company Logo" />
        </figure>
        <section>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </section>
      </header>
      <main>
        <article>
          {project.content &&
            project.content.map((item, index) => {
              if (item.type === "paragraph") {
                return (
                  <p key={index} className="projectContent_paragraph">
                    {item.text}
                    <br />
                    <br />
                    <br />
                  </p>
                );
              } else if (item.type === "heading") {
                return (
                  <h2 key={index} className="ProjectContent_heading">
                    {item.text}
                    <br />
                  </h2>
                );
              } else if (item.type === "video") {
                return (
                  <video key={index} controls className="projectVideoBox">
                    <source src={item.videoSrc} type="video/mp4" />
                  </video>
                );
              } else if (item.type === "largeImage") {
                return (
                  <img
                    key={index}
                    src={item.largeImage}
                    alt={item.alt}
                    className="projectLargeImage"
                  />
                );
              } else {
                return null;
              }
            })}
        </article>
        <article className="projectSliderContainer">
          <CustomSlider
            sliderName={`projectSlider_${project.projectId}`}
            slidesToShow={4}
            mask={false}
            swipeToSlide={true}
            pauseOnHover={false}
            sliderAutoPlay={false}
            slideLoop={false}
            sliderArrows={true}
            slideSpeed={250}
            breakpointSlidesToShow={{ lg: 3, md: 2, sm: 1 }}
          />
        </article>
      </main>
    </div>
  );
}
