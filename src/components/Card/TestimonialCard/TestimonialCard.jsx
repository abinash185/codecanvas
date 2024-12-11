import "./TestimonialCard.css";
import PropTypes from "prop-types";
import { toSentenceCase } from "../../../utils/Helper";

export default function TestimonialCard({
  // title,
  description,
  fullName,
  company,
  designation,
  picture,
}) {
  return (
    <>
      <div className="testimonialCard">
        {/* <h1>{title.toUpperCase()}</h1> */}
        <figure>
          <div>
            <img src={picture} alt="User" />
          </div>
          <div>
            <h2>{fullName.toUpperCase()}</h2>
            <h2>{company.toUpperCase()}</h2>
            <p>{toSentenceCase(designation)}</p>
          </div>
        </figure>
        <p>{toSentenceCase(description)}</p>
      </div>
    </>
  );
}

TestimonialCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  fullName: PropTypes.string,
  company: PropTypes.string,
  designation: PropTypes.string,
  picture: PropTypes.string,
  color: PropTypes.string,
};
