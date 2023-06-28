import React from "react";
import {FaThList, FaPowerOff, FaSyncAlt} from "react-icons/fa";
const UserNav = () => {
  return (
    <nav className="user-nav">
      <div className="user-name">
        <h4>zero</h4>
      </div>
      <span>
        <FaThList />
        <p>User Panel</p>
      </span>
      <span>
        <FaSyncAlt />
        <p>Autotracking</p>
      </span>
      <span>
        <FaPowerOff />
        <p>Log out</p>
      </span>
    </nav>
  );
};

export default React.memo(UserNav);
