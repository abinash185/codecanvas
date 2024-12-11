import PropTypes from "prop-types";
import "./TeamCard.css";
import { useRef, useState } from "react";

export default function TeamCard({
  empName,
  empTitle,
  empDescriptions,
  empPictures,
  cardId,
}) {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToNextParagraph = () => {
    const paragraphs = containerRef.current.querySelectorAll("p");
    const nextIndex = (currentIndex + 1) % paragraphs.length;
    const nextRef = paragraphs[nextIndex];

    if (nextRef) {
      nextRef.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setCurrentIndex(nextIndex);
    } else {
      console.error("Ref is not properly assigned.");
    }
  };

  return (
    <div className="teamCardContainer" ref={containerRef}>
      <figure>
        <img src={empPictures} alt="Employee" />
      </figure>
      <section>
        <h1>{empName}</h1>
        <h2>{empTitle}</h2>
        <div>
          {empDescriptions.map((desc, index) => (
            <p key={index} style={{ margin: "15px 0" }}>
              {desc}
            </p>
          ))}
        </div>
      </section>
      <button className="nxtBtn" onClick={scrollToNextParagraph}>
        NEXT
      </button>
    </div>
  );
}

TeamCard.propTypes = {
  empName: PropTypes.string,
  empTitle: PropTypes.string,
  empDescriptions: PropTypes.arrayOf(PropTypes.string),
  empPictures: PropTypes.string,
  cardId: PropTypes.number,
};
