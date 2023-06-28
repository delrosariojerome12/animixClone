import React, {useState, useEffect} from "react";
import {FaChevronDown} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {handleLoadMore} from "../../features/fetch/fetchReducer";
import {debounce} from "lodash";

const LoadBtn = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setIsClicked(false);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [isClicked]);

  return (
    <button
      className="load-btn"
      onClick={debounce(() => {
        dispatch(handleLoadMore());
        setIsClicked(true);
      }, 300)}
    >
      {isClicked ? (
        <p>Loading...</p>
      ) : (
        <>
          <FaChevronDown />
          <p>Load more</p>
        </>
      )}
    </button>
  );
};

export default React.memo(LoadBtn);
