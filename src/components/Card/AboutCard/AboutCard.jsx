import "./AboutCard.css";

import PropTypes from "prop-types";

export default function AboutCard({ picture, description }) {
  return (
    <figure className="aboutCardContainer">
      <div>
        <img src={picture} alt="Picture" />
      </div>
      <p>{description}</p>
    </figure>
  );
}

AboutCard.propTypes = {
  picture: PropTypes.string,
  description: PropTypes.string,
};
