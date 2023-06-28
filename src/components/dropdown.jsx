import React, {useState} from "react";
import DropDownBtn from "../components/util/dropDownBtn";
const Dropdown = () => {
  const [isDropDownClick, setIsDropDownClick] = useState(false);

  return (
    <div
      onBlur={() => setIsDropDownClick(false)}
      style={isDropDownClick ? {height: "160px"} : {height: "70px"}}
      className="dropdown"
    >
      <div className="top-text">
        <p>
          We have multiple stream types for each anime, so use what works best
          for you.
        </p>
        <p>
          If you got problem try reload the player or try different server on
          external player.
        </p>
      </div>
      <div className="mid-text">
        <p>
          For mobile users, you can swipe left / right to open menu, schedule,
          and stream list.
        </p>
        <p>
          You can also install PWA (add to homescreen) to launch AniMixPlay like
          an app.
        </p>
      </div>
      <p className="read-more">
        Read more info in our FAQ page, or join discord.
      </p>
      <DropDownBtn isClick={isDropDownClick} setIsClick={setIsDropDownClick} />
    </div>
  );
};

export default React.memo(Dropdown);
