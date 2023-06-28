import {useState, useEffect} from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [list, setList] = useState([]);

  const getData = async () => {
    await axios
      .get(url)
      .then((res) => setList(res))
      .catch((err) => console.error(err))
      .finally(() => console.log("finished"));
  };

  useEffect(() => {
    getData();
  }, [url]);

  return {list};
};
