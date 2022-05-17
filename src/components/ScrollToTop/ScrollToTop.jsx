import React, { useEffect, useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";
import s from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={s.scroll_to_top_wrapper}>
      {isVisible && (
        <div onClick={scrollToTop} className={s.scroll_to_top}>
          <BsArrowUpSquareFill className={s.scroll_to_top_button} />
        </div>
      )}
    </div>
  );
}
