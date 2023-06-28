import React from "react";
import {useSelector} from "react-redux";
import {useLocation, useSearchParams} from "react-router-dom";
import AnimeResult from "./util/animeResult";
import CategoryBtnCon from "./util/categoryBtnCon";
import LoadBtn from "./util/loadbtn";
import ScheduleBtn from "./util/scheduleBtn";

const AnimeContainer = () => {
  const {isCategoryLoading} = useSelector((state) => state.categoryReducer);
  const {hasNextPage} = useSelector((state) => state.fetchedData);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const renderSpinner = () => {
    return (
      <div className="loading-screen">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  };
  if (location.search.length > 4 && searchParams.get("q")) {
    return (
      <div className="anime-container">
        <h1>Search Results: "{searchParams.get("q")}"</h1>
        <AnimeResult />
        {hasNextPage && <LoadBtn />}
      </div>
    );
  }
  return (
    <div className="anime-container">
      <CategoryBtnCon />
      <ScheduleBtn />
      {isCategoryLoading ? renderSpinner() : <AnimeResult />}
      {hasNextPage && <LoadBtn />}
    </div>
  );
};

export default React.memo(AnimeContainer);
