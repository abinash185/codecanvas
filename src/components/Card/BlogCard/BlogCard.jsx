import "./BlogCard.css";
import PropTypes from "prop-types";
import rightChevron from "../../../assets/images/right-chevron-svgrepo-com.svg";
import { Link, useNavigate } from "react-router-dom";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  const shortner = (para = blog.content[0].text, textLimit) => {
    if (para.length > textLimit) {
      return para.slice(0, textLimit) + "...";
    } else {
      return para;
    }
  };

  return (
    <article
      className="blogCardContainer"
      id={blog.id}
      onClick={() => navigate(`/blog/${blog.id}`)}
    >
      <div>
        <figure>
          <img src={blog.picture} alt="" />
        </figure>
        <div className="blogCardContent">
          <time className="blogCardDate" dateTime="2019-06-29">
            {blog.date}
          </time>
          <div className="blogCardTags">
            {blog.tags &&
              blog.tags.map((tag, index) => {
                return <span key={index}>{tag}</span>;
              })}
          </div>
          <a href="#" className="blogCardTitle">
            <h3>{shortner(blog.title, 50)}</h3>
          </a>
          <p>{shortner(blog.content[0].text, 122)}</p>
          <div>
            <span>
              <Link to={`/blog/${blog.id}`}>
                Read more <img src={rightChevron} alt="Right Arrow" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string,
    date: PropTypes.string.isRequired,
    tags: PropTypes.array,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([
          "paragraph",
          "heading",
          "list",
          "image",
          "quote",
        ]).isRequired,
        text: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.string),
        src: PropTypes.string,
        alt: PropTypes.string,
      })
    ),
  }),
};
