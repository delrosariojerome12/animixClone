import React from "react";
import Button from "./button";
import {useSelector} from "react-redux";

const CategoryBtnCon = () => {
  const {categoryList} = useSelector((state) => state.categoryReducer);

  return (
    <div className="btn-con">
      {categoryList.map((btn) => {
        const {id} = btn;
        return <Button key={id} {...btn} />;
      })}
    </div>
  );
};

export default React.memo(CategoryBtnCon);
