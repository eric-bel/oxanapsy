import s from "./Article.module.css";
import { NavLink } from "react-router-dom";

const Article = ({ title, text }) => {
  return (
    <div className={s.article_container}>
      {/* <img src={img} alt="article" className={s.article_img} /> */}
      <h3 className={s.article_title}>{title}</h3>
      <div className={s.article_text}>{text}</div>
      <NavLink to="/articles/fatherrole">Роль отца</NavLink>
    </div>
  );
};
export default Article;
