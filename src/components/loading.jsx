import React, {useEffect, useRef} from "react";
import {useSelector} from "react-redux";
const Loading = () => {
  const {isHomeLoading} = useSelector((state) => state.home);
  const loading = useRef(null);
  console.log("loading", isHomeLoading);
  useEffect(() => {
    if (isHomeLoading) {
      loading.current.style.width = "100%";
    } else {
      loading.current.style.width = "0%";
    }
  }, [isHomeLoading]);

  return <div ref={loading} className="loading"></div>;
};

export default React.memo(Loading);
