import React from "react";
import PropTypes from "prop-types";
import {FaStar} from "react-icons/fa";
import {IconContext} from "react-icons/lib";
import {useNavigate} from "react-router-dom";

const Anime = ({
  title,
  title_english,
  score,
  episodes,
  mal_id,
  images: {
    webp: {image_url},
  },
}) => {
  const navigate = useNavigate();
  console.log("anime");
  const handleGoToSelectedAnime = () => {
    navigate(`/anime/${mal_id}/${title.replace(/\s+/g, "-")}`);
  };

  return (
    <article onClick={handleGoToSelectedAnime} className="anime-card">
      <IconContext.Provider
        value={{className: "icon", height: "14px", color: "#dbc137"}}
      >
        <img src={image_url} alt={`${title}`} />
        <div className="anime-text">
          <p>{title_english ? title_english : title}</p>
          {episodes ? <p>{`${episodes}/${episodes}`}</p> : <p>{`?/?`}</p>}
        </div>
        <div className="score-con">
          <FaStar />
          {score ? <p>{score.toFixed(2)}</p> : <p>?</p>}
        </div>
      </IconContext.Provider>
    </article>
  );
};

Anime.propTypes = {
  title: PropTypes.string,
  title_english: PropTypes.string,
  score: PropTypes.number,
  episodes: PropTypes.number,
  images: PropTypes.object,
};
Anime.defaultProps = {
  episodes: "?",
};

export default React.memo(Anime);
