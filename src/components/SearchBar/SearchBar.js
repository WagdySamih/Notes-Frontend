import classes from "./SearchBar.module.scss";

function SearchBar() {
  return (
    <div>
      <input type="search" class={classes.SearchBar} id="search_input" placeholder="Search"/>
      <hr/>
    </div>
  );
}

export default SearchBar;
