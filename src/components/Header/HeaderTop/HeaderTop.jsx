import s from "./HeaderTop.module.css";

const HeaderTop = () => {
  return (
    <header className="main_container">
      <div className={s.header_wrapper}>
        <div className={s.header_container}>
          <div className={s.contact_me}>Записаться на прием:</div>
          <a className={s.tel_number} href="tel:+375 29 706 74 39">
            +375 29 706 74 39;
          </a>
          <a className={s.email} href="mailto:oks-chu2013@yandex.by">
            oks-chu2013@yandex.by
          </a>
        </div>
      </div>
    </header>
  );
};
export default HeaderTop;
