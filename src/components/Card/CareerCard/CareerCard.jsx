import PropTypes from "prop-types";
import "./CareerCard.css";
import { useNavigate } from "react-router-dom";

export default function CareerCard({
  positionName,
  experienceRequired,
  employmentType,
  jobDepartment,
  jobId,
}) {
  const navigate = useNavigate();

  return (
    <div className="careerCardContainer">
      <div>
        <h1>
          {positionName} <span>({experienceRequired})</span>
        </h1>
        <div>
          <span>{employmentType}</span>
          <span>{jobDepartment}</span>
        </div>
      </div>
      <div>
        <button
          id="contactBtn"
          onClick={() => {
            navigate(`/careers/${jobId}`);
          }}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

CareerCard.propTypes = {
  jobId: PropTypes.string,
  positionName: PropTypes.string,
  experienceRequired: PropTypes.string,
  employmentType: PropTypes.string,
  jobDepartment: PropTypes.string,
};
