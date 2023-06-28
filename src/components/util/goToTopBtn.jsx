import React, {useState, useEffect, useCallback} from "react";
import {FaChevronUp} from "react-icons/fa";

const GoToTopBtn = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isBtnShow, setIsBtnShow] = useState(false);

  const handleScroll = useCallback(() => {
    const pos = window.scrollY;
    setScrollPosition(pos);
    scrollPosition > 80 ? setIsBtnShow(true) : setIsBtnShow(false);
  }, [scrollPosition]);

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, handleScroll]);
  return (
    <div
      className={isBtnShow ? "goToTop-btn-show" : "goToTop-btn"}
      onClick={handleScrollTop}
    >
      <FaChevronUp />
    </div>
  );
};

export default React.memo(GoToTopBtn);
