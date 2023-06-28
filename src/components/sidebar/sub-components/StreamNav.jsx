import React, {useState} from "react";

const streamList = [
  "Any",
  "GOGO Stream",
  "API Stream",
  "RUSH Stream",
  "AL Stream",
];
const subDubList = ["Any", "Sub", "Dub"];

const StreamNav = () => {
  const [selectedStream, setSelectedStream] = useState("Any");
  const [selectedSubDub, setSelectedSubDub] = useState("Any");

  return (
    <nav className="stream-nav">
      <label htmlFor="season">
        <p>Stream</p>
        <select
          value={selectedStream}
          name="season"
          onChange={(e) => setSelectedStream(e.currentTarget.value)}
        >
          {streamList.map((data, index) => (
            <option key={index} value={data}>
              {data}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="subDub">
        <p>Sub/Dub</p>
        <select
          name="year"
          value={selectedSubDub}
          onChange={(e) => setSelectedSubDub(e.currentTarget.value)}
        >
          {subDubList.map((data, index) => (
            <option value={data} key={index}>
              {data}
            </option>
          ))}
        </select>
      </label>
    </nav>
  );
};

export default React.memo(StreamNav);
