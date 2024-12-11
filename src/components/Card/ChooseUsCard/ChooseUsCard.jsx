import "./ChooseUsCard.css";
import PropTypes from "prop-types";

export default function ChooseUsCard({ picture, title, description }) {
  return (
    <>
      <div className="chooseUsCardContainer">
        <img src={picture} alt="" />
        <h2 className="text-[var(--theme-red)] font-medium">{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}

ChooseUsCard.propTypes = {
  picture: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
