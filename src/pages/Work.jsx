import { ourWork, workNavbarArray } from "../utils/Constant";
import { useState } from "react";
import "../styles/Work.css";
import { useNavigate } from "react-router-dom";

export default function Work() {
  const [activeContent, setActiveContent] = useState("All");

  const navigate = useNavigate();

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="workContainer">
      <header>
        <h1>
          Our Brand
          <br />
          FORAYS
        </h1>
        <p>{ourWork.description}</p>
      </header>
      <article className="workNavbar">
        {workNavbarArray.map((link, index) => {
          return (
            <span
              key={index}
              onClick={() => handleContentChange(link.split(" ").join(""))}
              className={
                activeContent === link.split(" ").join("") ? "active" : ""
              }
            >
              {link}
            </span>
          );
        })}
      </article>
      <main className="workCardContainer">
        {activeContent === "All" && (
          <div>
            {ourWork.works.all.map((e, index) => {
              return (
                <div key={`e-${index}`} className="workCardStyle">
                  <img
                    src={e.picture}
                    alt="our Work"
                    onClick={() =>
                      navigate(`/work/${e.title.split(" ").join("_")}`)
                    }
                  />
                </div>
              );
            })}
          </div>
        )}
        {activeContent === "Branding" && (
          <div>
            {ourWork.works.branding.map((e, index) => {
              return (
                <div key={`e-${index}`} className="workCardStyle">
                  <img
                    src={e.picture}
                    alt="our Work"
                    onClick={() =>
                      navigate(`/work/${e.title.split(" ").join("_")}`)
                    }
                  />
                </div>
              );
            })}
          </div>
        )}
        {activeContent === "CaseStudies" && (
          <div>
            {ourWork.works.caseStudies.map((e, index) => {
              return (
                <div key={`e-${index}`} className="workCardStyle">
                  <img
                    src={e.picture}
                    alt="our Work"
                    onClick={() =>
                      navigate(`/work/${e.title.split(" ").join("_")}`)
                    }
                  />
                </div>
              );
            })}
          </div>
        )}
        {activeContent === "CreativeHub" && (
          <div>
            {ourWork.works.creativeHub.map((e, index) => {
              return (
                <div key={`e-${index}`} className="workCardStyle">
                  <img
                    src={e.picture}
                    alt="our Work"
                    onClick={() =>
                      navigate(`/work/${e.title.split(" ").join("_")}`)
                    }
                  />
                </div>
              );
            })}
          </div>
        )}
        {activeContent === "PerformanceMarketing" && (
          <div>
            {ourWork.works.performanceMarketing.map((e, index) => {
              return (
                <div key={`e-${index}`} className="workCardStyle">
                  <img
                    src={e.picture}
                    alt="our Work"
                    onClick={() =>
                      navigate(`/work/${e.title.split(" ").join("_")}`)
                    }
                  />
                </div>
              );
            })}
          </div>
        )}
        {activeContent === "Production" && (
          <div>
            {ourWork.works.production.map((e, index) => {
              return (
                <div key={`e-${index}`} className="workCardStyle">
                  <img
                    src={e.picture}
                    alt="our Work"
                    onClick={() =>
                      navigate(`/work/${e.title.split(" ").join("_")}`)
                    }
                  />
                </div>
              );
            })}
          </div>
        )}
        {activeContent === "UI/UX" && (
          <div>
            {ourWork.works.uiUx.map((e, index) => {
              return (
                <div key={`e-${index}`} className="workCardStyle">
                  <img
                    src={e.picture}
                    alt="our Work"
                    onClick={() =>
                      navigate(`/work/${e.title.split(" ").join("_")}`)
                    }
                  />
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
