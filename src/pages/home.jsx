import React, {useState, useEffect} from "react";
import AnimeContainer from "../components/animeContainer";
import Newsbar from "../components/newsbar";
import Dropdown from "../components/dropdown";
import GoToTopBtn from "../components/util/goToTopBtn";
import {useLocation} from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const location = useLocation();
  console.log("home");

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("resize", handleScreen);
    // screenWidth > 1000 && isSidebarOpen && handleSidebar();
    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, [screenWidth]);

  const renderSearchLayout = () => {
    return (
      <>
        <Newsbar />
        <Dropdown />
        <AnimeContainer />
      </>
    );
  };

  const handleScreen = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
  };
  return (
    <section className="home">
      <section className="left-container">
        {location.search.length < 4 || location.search.slice(1, 4) === "tab" ? (
          renderSearchLayout()
        ) : (
          <AnimeContainer />
        )}
      </section>
      <section className="right-container">
        <Sidebar />
      </section>
      <GoToTopBtn />
    </section>
  );
};

export default React.memo(Home);
