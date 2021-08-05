import SearchBar from "../components/SearchBar/SearchBar";
import Note from "../components/note/Note";
import AddNote from "../components/AddNote/AddNote";

function Home() {
  return (
    <div>
      <SearchBar />
      <AddNote />
      <Note />
    </div>
  );
}

export default Home;
