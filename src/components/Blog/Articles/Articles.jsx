import Article from "./Article/Article";
import s from "./Articles.module.css";

const Articles = () => {
  return (
    <div className={s.articles_container}>
      <h1>Articles container</h1>
      <Article />
    </div>
  );
};

export default Articles;
