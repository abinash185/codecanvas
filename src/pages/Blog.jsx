// import PropTypes from "prop-types";
import { blogs } from "../utils/Constant";
import { useLocation } from "react-router-dom";
import "../styles/Blog.css";

export default function Blog() {
  const location = useLocation();
  const blogId = location.pathname.split("/").pop();

  const blog = blogs.find((b) => {
    return b.id === blogId;
  });

  return (
    <>
      <div className="blog_container">
        <header>
          <h1>{blog.title}</h1>
          <div>
            <p>
              by <span>{blog.author}</span>
            </p>
            <p>{blog.date}</p>
          </div>
        </header>
        {blog.picture && (
          <figure>
            <img src={blog.picture} alt={"sa"} />
            <p>{blog.shortPictureDescription}</p>
          </figure>
        )}
        {blog.video && (
          <div>
            <video controls>
              <source src={blog.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        <main className="blogMainContainer">
          {blog.content &&
            blog.content.map((item, index) => {
              if (item.type === "paragraph") {
                return (
                  <p key={index} className="blogContent_paragraph">
                    {item.text}
                    <br />
                    <br />
                    <br />
                  </p>
                );
              } else if (item.type === "heading") {
                return (
                  <h2 key={index} className="blogContent_heading">
                    {item.text}
                    <br />
                  </h2>
                );
              } else if (item.type === "list") {
                return (
                  <ul key={index} className="blogContent_listContainer">
                    {item.items.map((listItem, listIndex) => (
                      <li key={listIndex}>{listItem}</li>
                    ))}
                    <br />
                    <br />
                  </ul>
                );
              } else if (item.type === "image") {
                return (
                  <img
                    key={index}
                    src={item.src}
                    alt={item.alt}
                    className="blogContent_picture"
                  />
                );
              } else if (item.type === "quote") {
                return <blockquote key={index}>{item.text}</blockquote>;
              } else {
                return null;
              }
            })}
        </main>
      </div>
    </>
  );
}

// Blog.propTypes = {
//   blog: PropTypes.shape({
//     id: PropTypes.string,
//     title: PropTypes.string.isRequired,
//     picture: PropTypes.string,
//     date: PropTypes.string.isRequired,
//     tags: PropTypes.array,
//     content: PropTypes.arrayOf(
//       PropTypes.shape({
//         type: PropTypes.oneOf([
//           "paragraph",
//           "heading",
//           "list",
//           "image",
//           "quote",
//         ]).isRequired,
//         text: PropTypes.string,
//         items: PropTypes.arrayOf(PropTypes.string),
//         src: PropTypes.string,
//         alt: PropTypes.string,
//       })
//     ),
//   }),
// };
