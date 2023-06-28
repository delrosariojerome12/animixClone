import React from "react";

const Extrabar = (suggestions, isExtraBarOpen) => {
  console.log(suggestions);
  if (suggestions !== []) {
    return (
      <div className={isExtraBarOpen ? "extra-bar" : "extra-bar close"}></div>
    );
  }
};

export default React.memo(Extrabar);
