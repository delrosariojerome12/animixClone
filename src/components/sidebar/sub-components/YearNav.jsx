import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getYear} from "../../../features/sidebar/fetchYear";
const seasonsList = ["Winter", "Spring", "Summer", "Fall"];
const YearNav = () => {
  const {fetchedYear} = useSelector((state) => state.year);
  const dispatch = useDispatch();

  const [selectedYear, setSelectedYear] = useState("2022");
  const [selectedSeason, setSelectedSeason] = useState("Winter");

  useEffect(() => {
    dispatch(getYear());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // add sorting here
  };

  return (
    <nav className="year-nav">
      <form onSubmit={handleSubmit}>
        <label htmlFor="season">
          <p>Season</p>
          <select
            value={selectedSeason}
            name="season"
            onChange={(e) => setSelectedSeason(e.currentTarget.value)}
          >
            {seasonsList.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="year">
          <p>Year</p>
          <select
            name="year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.currentTarget.value)}
          >
            {fetchedYear.map((data, index) => (
              <option value={data} key={index}>
                {data}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">GO</button>
      </form>
    </nav>
  );
};

export default React.memo(YearNav);
