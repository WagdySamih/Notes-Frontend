import { useState, useCallback } from "react";
import classes from "./SearchBar.module.scss";

import searchIconWhite from "../../assets/icons/search-white.svg";
import searchIconBlack from "../../assets/icons/search-black.svg";
import { debounce } from "lodash";

let { getNotes } = require("../../Services/Notes.service");
function SearchBar(props) {

  // for switch icon in focus/ blur mode
  const [iconPath, setIconPath] = useState(searchIconWhite);
  const [inputText, setInputText] = useState("");

  /**
   *  @description: 
   *      Handler is used to perform a debounce time (500 ms) between user input 
   *      to perform better User experience and decrease unnecessary API requests
   */
  const handler =
    useCallback(
      debounce(async(text) => {
        const notes = await getNotes(text);
        props.setNotes(notes)
      }, 500),
      []
    );

  const handleTextChange = (text) => {
    setInputText(text);
    handler(text);
  };

  return (
    <div className={classes.SearchBar}>
      <img src={iconPath} />
      <input
        value={inputText}
        onChange={(e) =>handleTextChange(e.target.value)}
        type="search"
        id="search_input"
        placeholder="Search"
        onFocus={() => setIconPath(searchIconBlack)}
        onBlur={() => setIconPath(searchIconWhite)}
      />
      <hr />
    </div>
  );
}

export default SearchBar;
