import React, {useState, useEffect, useCallback} from "react";
// icons
import {AiFillHome} from "react-icons/ai";
import {GoChevronLeft} from "react-icons/go";
import {FaSearch} from "react-icons/fa";
import {ImShuffle, ImCross} from "react-icons/im";
import {TiThMenu} from "react-icons/ti";
import {IconContext} from "react-icons";
import {useNavigate} from "react-router-dom";
import SuggestedAnime from "../util/suggestedAnime";
import {
  handleSearchAnime,
  getHomeData,
} from "../../features/navbar/searchAnime";
import {useDispatch} from "react-redux";

import {debounce} from "lodash";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("navbar");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isExtraBarOpen, setIsExtraBarOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [suggestions, setSuggestions] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [isOverlayShow, setIsOverlayShow] = useState(false);

  // functions
  const handleScreen = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.length > 2) {
      dispatch(handleSearchAnime(searchText));
      navigate(`?q=${searchText.replace(/ /g, "-")}`);
      setIsExtraBarOpen(false);
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        setIsOverlayShow(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  };
  const handleSearchDebounce =
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useCallback(
      debounce(async (e) => {
        const req = `https://api.jikan.moe/v4/anime?q=${e.target.value}&letter=${e.target.value}&order_by=score&min_score=1&limit=6`;
        if (e.target.value.length > 1) {
          setIsOverlayShow(true);
          await axios
            .get(req)
            .then((data) => setSuggestions(data.data.data))
            .catch((e) => console.error(e));
        }
      }, 1000),
      []
    );

  const handleGoHome = debounce(() => {
    window.scrollTo(0, 0);
    navigate("/");
    setSearchText("");
    setIsOverlayShow(false);
    setSuggestions([]);
    dispatch(getHomeData());
  }, 500);

  useEffect(() => {
    window.addEventListener("resize", handleScreen);
    screenWidth > 1000 && setIsSearchOpen(false);
    screenWidth > 1000 && setIsExtraBarOpen(false);
    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, [screenWidth]);

  return (
    <nav className="navbar">
      <div className="left-side">
        <span>
          <GoChevronLeft onClick={() => navigate(-1)} />
        </span>
        <span>
          <AiFillHome onClick={handleGoHome} />
        </span>
        <img
          className={isSearchOpen ? "close-img" : null}
          onClick={handleGoHome}
          src="https://animixplay.to/assets/logo.png"
          alt="logo"
        />
      </div>
      <form
        className={isSearchOpen ? "open-form" : "close-form"}
        onSubmit={handleSubmit}
      >
        <label htmlFor="search-input" className="search-input-con">
          <input
            value={searchText}
            onFocus={() => setIsExtraBarOpen(true)}
            onBlur={() => setIsExtraBarOpen(false)}
            onChange={(e) => {
              setSearchText(e.target.value);
              handleSearchDebounce(e);
            }}
            onKeyUp={() => {
              if (searchText === "") {
                searchText === "" && setSuggestions([]);
                setIsOverlayShow(false);
              }
            }}
            type="text"
            placeholder="Search"
            className="search-input"
          />
          <span className="search-icon">
            <FaSearch className="search" />
          </span>
        </label>
      </form>
      <div className="right-side">
        <button>
          <ImShuffle />
          <p>Random</p>
        </button>
        <button>A-Z List</button>
        <IconContext.Provider value={{size: "2rem", className: "right-icons"}}>
          {isSearchOpen ? (
            <ImCross
              onClick={() => {
                setIsSearchOpen((prev) => !prev);
                // setSuggestions([]);
                // setSearchText("");
                setIsExtraBarOpen(false);
              }}
            />
          ) : (
            <FaSearch
              onClick={() => {
                setIsSearchOpen((prev) => !prev);
                setIsExtraBarOpen(true);
                // isSidebarOpen && handleSidebar();
              }}
            />
          )}
          <TiThMenu
            onClick={() => {
              //   handleSidebar();
              isSearchOpen && setIsSearchOpen(!isSearchOpen);
            }}
          />
        </IconContext.Provider>
      </div>
      <div className={isExtraBarOpen ? "extra-bar" : "extra-bar close"}>
        <div className="easy-sort">
          <p>sort btn</p>
          <p>sort btn</p>
          <p>sort btn</p>
        </div>
        <div className="suggested-container">
          {suggestions.map((anime) => {
            const {mal_id} = anime;
            return <SuggestedAnime key={mal_id} {...anime} />;
          })}
        </div>
      </div>
      <div
        style={
          isOverlayShow
            ? {
                zIndex: "10",
                opacity: ".95",
                visibility: "visible",
              }
            : null
        }
        onClick={() => {
          setIsOverlayShow(false);
        }}
        className="overlay-2"
      ></div>
    </nav>
  );
};

export default React.memo(Navbar);
