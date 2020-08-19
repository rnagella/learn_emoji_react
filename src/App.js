import React, { useState } from "react";
import "./styles.css";
const emojis = require("../src/data/emoji.json");

export default function App() {
  const [search, setSearch] = useState(emojis);
  const onSearch = (event) => {
    const results = emojis.filter((data) =>
      data.keywords.includes(event.target.value)
    );
    setSearch(results);
  };
  return (
    <div className="App">
      <h1>Learn Emoji</h1>
      <span>
        # of Emoji's are <h2>{emojis.length}</h2>
      </span>
      <input onClick={onSearch} />
      <br />
      {search.map((data) => {
        return <button id={data.no}>{data.char}</button>;
      })}
    </div>
  );
}
