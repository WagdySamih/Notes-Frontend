import { useState } from "react";
import classes from "./Note.module.scss";
import editIcon from "../../assets/icons/edit-note.svg";
import deleteIcon from "../../assets/icons/delete-note.svg";
import NoteManage from "../NoteManage/NoteManage";
let { deleteNote } = require("../../Services/Notes.service");

function Note(props) {
  const [openNoteManage, setOpenNoteManage] = useState(false);

  const onDeleteNote = async () => {
    await deleteNote(props._id);
    const notes = props.notes.filter((n) => n._id !== props._id);
    props.setNotes(notes);
  };

  return (
    <section className={classes.card}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.content}>{props.description}</div>
      <div className={classes.noteManage}>
        <button onClick={() => onDeleteNote()}>
          <img src={deleteIcon} alt="delete icon" />
        </button>
        <button onClick={() => setOpenNoteManage(true)}>
          <img src={editIcon} alt="edit icon" />
        </button>
      </div>
      {openNoteManage && (
        <NoteManage
          _id={props._id}
          title={props.title}
          description={props.description}
          setOpenNoteManage={setOpenNoteManage}
          setNotes={props.setNotes}
        />
      )}
    </section>
  );
}

export default Note;
