import React from "react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";

const DropDownBtn = (props) => {
  const {isClick, setIsClick} = props;

  return (
    <button className="dropdown-btn" onClick={() => setIsClick(!isClick)}>
      {isClick ? <FaChevronUp /> : <FaChevronDown />}
    </button>
  );
};

export default React.memo(DropDownBtn);
