import React, {useState} from "react";
import {useSelector} from "react-redux";
import DropDownBtn from "../../util/dropDownBtn";
const GenreNav = () => {
  const {fetchedGenre} = useSelector((state) => state.sidebar);
  const [isGenreClick, setIsGenreClick] = useState(false);

  return (
    <nav
      className="genre-nav"
      style={isGenreClick ? {height: "1120px"} : {height: "254px"}}
    >
      <p>Genres</p>
      <div className="genre-con">
        {fetchedGenre.map((genre) => {
          const {name, mal_id} = genre;
          return (
            <label key={mal_id}>
              <input value={name} type="checkbox" name={name} id={mal_id} />
              <p>{name}</p>
            </label>
          );
        })}
      </div>
      <DropDownBtn isClick={isGenreClick} setIsClick={setIsGenreClick} />
    </nav>
  );
};

export default React.memo(GenreNav);
