import s from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  return (
    <section className={s.top_nav}>
      <input id={s.menu_toggle} type="checkbox" />
      <label className={s.menu_button_container} htmlFor={s.menu_toggle}>
        <div className={s.menu_button}></div>
      </label>
      <ul className={s.menu}>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
      </ul>
    </section>
  );
};

export default BurgerMenu;
