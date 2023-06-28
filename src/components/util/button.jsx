import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {handleChangeCategory} from "../../features/categoryBtn/categoryReducer";
import {debounce} from "lodash";
import {useNavigate} from "react-router-dom";

const Button = (props) => {
  const {category, link, id, isSelected} = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("btn");

  const handleNavigate = useCallback(() => {
    navigate(`?tab=${category.replace(/ /g, "-").toLowerCase()}`);
  }, [navigate, category]);
  return (
    <button
      className={isSelected ? "category-btn-open" : "category-btn"}
      disabled={isSelected}
      onClick={debounce(() => {
        dispatch(handleChangeCategory({link, id}));
        handleNavigate();
      }, 300)}
    >
      {category}
    </button>
  );
};

export default React.memo(Button);
