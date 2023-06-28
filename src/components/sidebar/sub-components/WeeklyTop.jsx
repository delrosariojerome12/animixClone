import React, {useState} from "react";
import {useSelector} from "react-redux";
import DropDownBtn from "../../util/dropDownBtn";
import WeeklyAnime from "../util/weeklyAnime";
const WeeklyTop = () => {
  const {fetchedWeekly} = useSelector((state) => state.sidebar);

  const [isWeeklyClick, setIsWeeklyClick] = useState(false);
  const renderWeeklyAnime = () => {
    const sortedAnime = [...fetchedWeekly];
    return sortedAnime
      .sort((a, b) => b.members - a.members)
      .map((anime) => {
        const {mal_id} = anime;
        return <WeeklyAnime key={mal_id} {...anime} />;
      });
  };
  return (
    <nav
      className="weekly-top"
      style={isWeeklyClick ? {height: "2335px"} : {height: "963px"}}
    >
      <p>Weekly Top</p>
      <div className="anime-top">{renderWeeklyAnime()}</div>
      <DropDownBtn isClick={isWeeklyClick} setIsClick={setIsWeeklyClick} />
    </nav>
  );
};

export default React.memo(WeeklyTop);
