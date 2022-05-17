import Article from "./Article/Article";
import s from "./Articles.module.css";
import fatherroleprev from "../../../assets/images/blogPage/Articles/fatherroleprev.jpg";

const Articles = () => {
  return (
    <div className={s.articles_container}>
      <h1>Articles container</h1>
      <Article
        path="/articles/fatherrole"
        img={fatherroleprev}
        date={"20.05.2020"}
        title={"Роль отца в формировании типа привязанности у женщин во взрослом возрасте"}
      />
    </div>
  );
};

export default Articles;
