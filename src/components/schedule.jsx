import React, {useState, useEffect} from "react";
import {ImArrowLeft} from "react-icons/im";
import Day from "./util/day";
import {useScheduleContext} from "../contexts/scheduleProvider/scheduleProvider";
import {useHomeContext} from "../contexts/homeProvider/homeProvider";

const Schedule = () => {
  const [time, setTime] = useState("");
  const [longTime, setLongTime] = useState("");
  const [today, setToday] = useState("");
  const [counter, setCounter] = useState(0);

  const {animeSched, isScheduleLoading} = useScheduleContext();
  const {isScheduleOpen, handleSchedule} = useHomeContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let today = new Date();
      let day = weekdays[today.getDay()];
      // let date = today.getDate();
      let hour = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();
      let period = "AM";
      if (hour > 12) {
        hour -= 12;
        period = "PM";
      } else if (hour === 12) {
        period = "PM";
      } else {
        period = "AM";
      }
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      let longHour = new Date().getHours();
      setToday(day);
      setCounter((prev) => prev + 1);
      setTime(`${hour}:${minutes}:${seconds} ${period}`);
      setLongTime(`${longHour}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearTimeout(timer);
  }, [counter]);

  const day_of_week = new Date().getDay();
  const sorted_sched = animeSched
    .slice(day_of_week)
    .concat(animeSched.slice(0, day_of_week));

  const style = {
    transform: "translateX(0%)",
  };

  if (isScheduleLoading) {
    return (
      <aside style={isScheduleOpen ? style : null} className="schedule">
        <div className="time-con">
          <ImArrowLeft
            onClick={() => {
              handleSchedule();
            }}
          />
          <h2 className="short-time">{time}</h2>
          <p className="long-time">
            {today} <span>{`(${longTime})`}</span>
          </p>
        </div>
        <h1>Loading...</h1>
      </aside>
    );
  }
  return (
    <aside style={isScheduleOpen ? style : null} className="schedule">
      <div className="time-con">
        <ImArrowLeft
          onClick={() => {
            handleSchedule();
          }}
        />
        <h2 className="short-time">{time}</h2>
        <p className="long-time">
          {today} <span>{`(${longTime})`}</span>
        </p>
      </div>
      <div className="days">
        {sorted_sched.map((day) => {
          const {id} = day;
          return <Day key={id} {...day} today={today} />;
        })}
        <span>Release time is estimated</span>
      </div>
    </aside>
  );
};

export default React.memo(Schedule);
