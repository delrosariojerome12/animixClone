import React from "react";
import {FaStar, FaEye} from "react-icons/fa";
import {IconContext} from "react-icons/lib";

const WeeklyAnime = (props) => {
  const {
    title,
    score,
    members,
    images: {
      webp: {image_url},
    },
  } = props;

  return (
    <article className="weekly-anime">
      <IconContext.Provider value={{className: "icon", height: "14px"}}>
        <img src={image_url} alt={`${title}.webp`} />
        <div className="text">
          <p>{title}</p>
          <span>
            <FaStar />
            <p> {score}</p>
          </span>
          <span>
            <FaEye />
            <p>{members}</p>
          </span>
        </div>
      </IconContext.Provider>
    </article>
  );
};

export default React.memo(WeeklyAnime);
