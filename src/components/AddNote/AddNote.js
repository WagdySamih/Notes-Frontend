import classes from "./AddNote.module.scss";
import { useState } from "react";
import NoteManage from "../NoteManage/NoteManage";
function AddNote(props) {
  const [openNoteManage, setOpenNoteManage] = useState(false);

  return (
    <section>
      <button
        className={classes.first_input}
        onClick={() => setOpenNoteManage(true)}
      >
        Add a note...
      </button>
      {openNoteManage && (
        <NoteManage
          setNotes={props.setNotes}
          setOpenNoteManage={setOpenNoteManage}
        />
      )}
    </section>
  );
}

export default AddNote;
