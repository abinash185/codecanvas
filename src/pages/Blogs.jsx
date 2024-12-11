import { blogs } from "../utils/Constant";
import BlogCard from "../components/Card/BlogCard/BlogCard";
import "../styles/Blogs.css";

export default function Blogs() {
  return (
    <div className="blogContainer">
      <header className="blogHeader">
        <h1>Our Blogs</h1>
      </header>
      <section>
        {blogs.map((blog, index) => {
          return <BlogCard key={index} blog={blog} />;
        })}
      </section>
    </div>
  );
}
