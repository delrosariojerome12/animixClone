import React, {useCallback} from "react";
import Anime from "./anime";
import {useSelector} from "react-redux";
const AnimeResult = () => {
  const {fetchedData} = useSelector((state) => state.fetchedData);
  console.log("Result");
  const render = useCallback(() => {
    return fetchedData.map((anime) => {
      const {mal_id} = anime;
      return <Anime key={mal_id} {...anime} />;
    });
  }, [fetchedData]);

  return <div className="anime-result">{render()}</div>;
};

export default React.memo(AnimeResult);
