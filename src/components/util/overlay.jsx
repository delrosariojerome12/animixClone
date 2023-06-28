import React, {useState} from "react";
import {useHomeContext} from "../../contexts/homeProvider/homeProvider";
const Overlay = React.memo(() => {
  const {handleSchedule, isScheduleOpen} = useHomeContext();
  const [isClicked, setIsClicked] = useState(false);

  const style = {
    zIndex: "998",
    opacity: ".95",
    display: "block",
  };
  return (
    <div
      onClick={() => {
        handleSchedule();
      }}
      style={isScheduleOpen ? style : null}
      className="overlay"
    ></div>
  );
});

export default Overlay;
