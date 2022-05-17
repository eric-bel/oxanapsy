import Articles from "./Articles/Articles";
import s from "./Blog.module.css";
import blogimg from "../../assets/images/blogPage/blogimg.png";

const Blog = () => {
  return (
    <div className="main_container">
      <img src={blogimg} alt="blog" className={s.blog_img} />
      <div className="main_padding">
        <div className={s.blog_container}>
          {/* <h1>Blog</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            consequatur, doloremque quibusdam, voluptatibus quam, dolores
            architecto quidem, dolorum quisquam, voluptates doloribus
            voluptatem.
          </p> */}
          <Articles />
        </div>
      </div>
    </div>
  );
};

export default Blog;
