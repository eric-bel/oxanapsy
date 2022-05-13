import s from "./SiteFooter.module.css";

const SiteFooter = () => {
  return (
    <div className={s.site_footer}>
      <a
        className={s.site_footer_link}
        href="https://www.instagram.com/cyber.ware/"
        target="_blank"
        rel="noreferrer"
      >
        Разработка сайтов: <strong>Cyber Ware</strong>
      </a>
    </div>
  );
};

export default SiteFooter;
