import s from "./Article.module.css";
import { NavLink } from "react-router-dom";

const Article = ({ path, img, date, title }) => {
  return (
    <div className={s.article_container}>
      <NavLink to={path}>
        <img src={img} alt="article" className={s.article_img} />
        <h3 className={s.article_date}>{date}</h3>
        <div className={s.article_title}>{title}</div>
      </NavLink>
    </div>
  );
};
export default Article;
