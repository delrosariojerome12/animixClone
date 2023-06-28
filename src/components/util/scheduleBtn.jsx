import React, {useState} from "react";
import {FaCalendarAlt} from "react-icons/fa";

const ScheduleBtn = () => {
  const [isClicked, setIsClicked] = useState(false);
  console.log("schedule btn");
  return (
    <button
      disabled={isClicked}
      onClick={() => {
        setIsClicked(!isClicked);
        // handleSchedule();
        const timer = setTimeout(() => {
          setIsClicked(false);
        }, 2000);
        return () => clearTimeout(timer);
      }}
      className="schedule-btn"
    >
      <span>
        <FaCalendarAlt />
      </span>
      <p>Schedule</p>
    </button>
  );
};

export default React.memo(ScheduleBtn);
