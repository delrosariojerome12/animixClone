import React, {useState, useEffect} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {BsFillTagFill} from "react-icons/bs";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";

const Newsbar = () => {
  const {fetchedSeasonAnime} = useSelector((state) => state.seasonNowNews);
  const [current, setCurrent] = useState(0);
  // controls
  useEffect(() => {
    const timer = setTimeout(() => {
      current < 9 ? setCurrent(current + 1) : setCurrent(0);
    }, 10000);
    return () => clearTimeout(timer);
  }, [current]);

  const handleNavigate = (id) => {
    switch (id) {
      case "btnLeft":
        return current > 0 ? setCurrent(current - 1) : setCurrent(9);
      case "btnRight":
        return current < 9 ? setCurrent(current + 1) : setCurrent(0);
      default:
    }
  };
  const renderNewsbar = () => {
    if (fetchedSeasonAnime.length > 0) {
      const {
        images: {
          webp: {image_url: normalImg, large_image_url: largeImg},
        },
        title,
        title_english,
        synopsis,
        themes,
        demographics,
        genres,
      } = fetchedSeasonAnime[current];

      const cutSynopsis = (text) => {
        let textCut = text.split(".");
        let textJoin = textCut.slice(0, 2).join(".") + ".";
        return textJoin;
      };
      const tags = [...genres, ...themes, ...demographics];
      return (
        <>
          <img src={normalImg} alt={`${title}.img`} />
          <div
            style={{
              backgroundImage: `url(${largeImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="text-container"
          >
            <div className="text">
              <h3>{title_english ? title_english : title}</h3>
              <p>{cutSynopsis(synopsis)}</p>
              <div className="tag-container">
                <ul className="tags">
                  <span className="tag-icon">
                    <BsFillTagFill />
                  </span>
                  {tags.map((tag) => {
                    const {mal_id, name} = tag;
                    return <li key={mal_id}>{name}</li>;
                  })}
                </ul>
                <div className="nav-btn-container">
                  <span
                    onClick={(e) => handleNavigate(e.target.id)}
                    id="btnLeft"
                  >
                    <FaChevronLeft />
                  </span>
                  <span
                    onClick={(e) => handleNavigate(e.target.id)}
                    id="btnRight"
                  >
                    <FaChevronRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return <article className="newsbar">{renderNewsbar()}</article>;
};

Newsbar.propTypes = {
  title: PropTypes.string,
  title_english: PropTypes.string,
  synopsis: PropTypes.string,
  themes: PropTypes.array,
  demographics: PropTypes.array,
  genres: PropTypes.array,
};

export default React.memo(Newsbar);
