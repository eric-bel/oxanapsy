import Articles from "./Articles/Articles";
import s from "./Blog.module.css";

const Blog = () => {
  return (
    <div className="main_container main_padding">
      <div className={s.blog_container}>
        <h1>Blog</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          consequatur, doloremque quibusdam, voluptatibus quam, dolores
          architecto quidem, dolorum quisquam, voluptates doloribus voluptatem.
        </p>
        <Articles />
      </div>
    </div>
  );
};

export default Blog;
