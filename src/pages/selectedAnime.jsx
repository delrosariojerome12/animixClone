import React from "react";
import {useParams} from "react-router-dom";
const SelectedAnime = React.memo(({handleSidebar}) => {
  const {id, animeTitle} = useParams();

  return (
    <>
      <div className="selected-anime">
        <h1>Selected anime</h1>
        <p>{id}</p>
        <p>{animeTitle}</p>
      </div>
    </>
  );
});

export default SelectedAnime;
