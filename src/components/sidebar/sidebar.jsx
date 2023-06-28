import React from "react";
import {IconContext} from "react-icons";
import YearNav from "./sub-components/YearNav";
import UserNav from "./sub-components/UserNav";
import GenreNav from "./sub-components/GenreNav";
import StreamNav from "./sub-components/StreamNav";
import WeeklyTop from "./sub-components/WeeklyTop";
const Sidebar = () => {
  console.log("sidebar");

  return (
    <aside className="sidebar">
      <IconContext.Provider value={{size: "3rem", className: "icon"}}>
        <UserNav />
        <YearNav />
        <GenreNav />
        <StreamNav />
        <WeeklyTop />
      </IconContext.Provider>
    </aside>
  );
};

export default React.memo(Sidebar);
