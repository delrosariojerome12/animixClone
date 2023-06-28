import React from "react";
import PropTypes from "prop-types";

const SuggestedAnime = ({
  title,
  title_english,
  title_japanese,
  type,
  year,
  images: {
    webp: {image_url},
  },
}) => {
  return (
    <div className="suggested-anime">
      <img src={image_url} alt={`${title}.img`} />
      <div className="text">
        <p>{title}</p>
        <p>{`${title_english === null ? "" : title_english}, ${
          title_japanese === null ? "" : title_japanese
        }`}</p>
        <p>{`${type} ${year !== null ? year : ""}`}</p>
      </div>
    </div>
  );
};

SuggestedAnime.propTypes = {
  title: PropTypes.string,
  image_url: PropTypes.string,
};
SuggestedAnime.defaultProps = {
  title_english: "?",
  title_japanese: "?",
};

export default React.memo(SuggestedAnime);
