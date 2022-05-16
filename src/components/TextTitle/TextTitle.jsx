import s from "./TextTitle.module.css";
const TextTitle = ({ title }) => {
  return <div className={s.text_title}>{title}</div>;
};
export default TextTitle;
