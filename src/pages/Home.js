import SearchBar from "../components/SearchBar/SearchBar";
import AddNote from "../components/AddNote/AddNote";
import NotesList from "../components/NotesList/NotesList";

import { useState, useEffect } from "react";
let { getNotes } = require("../Services/Notes.service");

function Home() {
  let resData;
  const [notes, setNotes] = useState([]);

  useEffect(async () => {
    resData = await getNotes();
    if (!notes.length && resData) {
      setNotes(resData);
    }
  }, []);

  return (
    <div>
      <SearchBar setNotes={setNotes}/>
      <AddNote setNotes={setNotes} />
      <NotesList notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default Home;
