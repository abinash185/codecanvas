import CareerCard from "../components/Card/CareerCard/CareerCard";
import "../styles/Careers.css";
import { useState } from "react";
import { jobOpenings } from "../utils/Constant";

export default function Careers() {
  const [hoverState, setHoverState] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
  });

  const highlightTextHandler = (textIndex) => {
    const newHoverState = {
      0: false,
      1: false,
      2: false,
      3: false,
    };
    newHoverState[textIndex] = true;

    setHoverState(newHoverState);
  };

  return (
    <div className="careersContainer">
      <section>
        <div>
          <h1
            className={`${hoverState[0] ? "text-white cursor-pointer" : ""}`}
            onMouseOver={() => highlightTextHandler(0)}
          >
            VISTAAR
          </h1>
          <h1
            className={`${hoverState[1] ? "text-white cursor-pointer" : ""}`}
            onMouseOver={() => highlightTextHandler(1)}
          >
            HOW
          </h1>
          <h1
            className={`${hoverState[2] ? "text-white cursor-pointer" : ""}`}
            onMouseOver={() => highlightTextHandler(2)}
          >
            WHY
          </h1>
          <h1
            className={`${hoverState[3] ? "text-white cursor-pointer" : ""}`}
            onMouseOver={() => highlightTextHandler(3)}
          >
            WHAT
          </h1>
        </div>
        <div>
          <div>
            {hoverState[0] && <p>Vistaar se baat karte hai!</p>}
            {hoverState[1] && (
              <p>
                We meticulously analyze, strategize, and execute to create
                brands that resonate.
              </p>
            )}
            {hoverState[2] && (
              <p>
                Because we believe every brand has a unique story to tell, and
                we&apos;re here to amplify it.
              </p>
            )}
            {hoverState[3] && (
              <p>
                We architect compelling brand narratives from inception to
                market dominance.
              </p>
            )}
          </div>
        </div>
      </section>
      <section className="relative">
        <h2>Open Positions</h2>
        <div>
          {jobOpenings.map((job, index) => {
            return (
              <div key={index}>
                <CareerCard
                  jobId={job.jobId}
                  positionName={job.positionName}
                  experienceRequired={job.experienceRequired}
                  employmentType={job.employmentType}
                  jobDepartment={job.jobDepartment}
                />
                <hr />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
