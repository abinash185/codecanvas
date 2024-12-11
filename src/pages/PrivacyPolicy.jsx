import "../styles/PrivacyPolicy.css";
import { privacyPolicyContent } from "../utils/Constant";
import parse from "html-react-parser";

const PrivacyPolicy = () => {
  return (
    <div className="container">
      {privacyPolicyContent.map((section, index) => (
        <div key={index} className="section">
          <h2 className="title">{section.title}</h2>
          <div className="content">
            {Array.isArray(section.content) ? (
              section.content.map((item, itemIndex) => (
                <p key={itemIndex} className="paragraph">
                  {typeof item === "string"
                    ? parse(item)
                    : item.points.map((point, pointIndex) => (
                        <ul key={pointIndex}>
                          {typeof point === "string" ? (
                            <li className="listItem">{parse(point)}</li>
                          ) : (
                            point.subPoints.map((subPoint, subPointIndex) => (
                              <li key={subPointIndex} className="subListItem">
                                {parse(subPoint)}
                              </li>
                            ))
                          )}
                        </ul>
                      ))}
                </p>
              ))
            ) : (
              <p className="paragraph">{parse(section.content)}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
