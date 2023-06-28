import React from "react";

const Day = ({day, schedule, today}) => {
  const sortedSchedule = schedule
    .map((anime) => {
      const {
        broadcast: {time},
      } = anime;
      if (time) {
        const parts = time.split(":");
        const newTime = parts[0] * (60 * 60 * 1000) + parts[1] * (60 * 1000);
        return {...anime, broadcast: {msTime: newTime, time: time}};
      }
      return {...anime, broadcast: {msTime: 0, time: "00:00"}};
    })
    .sort((a, b) => {
      return a.broadcast.msTime - b.broadcast.msTime;
    })
    .filter((anime) => {
      if (today === day) {
        const {
          broadcast: {msTime},
        } = anime;
        const currentHour = new Date().getHours();
        const currentMin = new Date().getMinutes();
        const totalTime =
          currentHour * (60 * 60 * 1000) + currentMin * (60 * 1000);
        return msTime >= totalTime;
      }
      return anime;
    });

  return (
    <div className="day">
      {day !== today && <p>{day}</p>}
      <div className="day-schedules">
        {sortedSchedule.map((anime) => {
          const {
            mal_id,
            title,
            broadcast: {time},
          } = anime;
          return (
            <div className="anime-time" key={mal_id}>
              <p>{title}</p>
              <p>{time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Day);
