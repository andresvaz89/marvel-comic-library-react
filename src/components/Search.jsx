import React from 'react';
import { useState } from 'react';

import '../styles/Search.scss';

const Search = () => {
  const [characterName, setCharacterName] = useState('');
  const [characterData, setCharacterData] = useState(null);
  const [comicData, setComicData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    getCharacterData();
  };

  const getCharacterData = () => {};

  const handleChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleReset = () => {};
  //TODO implement later

  return (
    <>
      <form action="" className="search" onSubmit={handleSubmit}>
        <input
          placeholder="ENTER CHARACTER NAME"
          type="text"
          onChange={handleChange}
        />
        <div className="buttons">
          <button className="submit">Get character data</button>
          <button className="reset" onClick={handleReset}></button>
        </div>
      </form>
    </>
  );
};

export default Search;
