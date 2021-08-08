import Note from "../note/Note";
import classes from "./NotesList.module.scss";
function NotesList(props = []) {

  return (
    <div className={classes.list}>
      {props.notes &&
        props.notes.map((note) => {
          return (
            <Note
              key={note._id}
              _id={note._id}
              title={note.title}
              description={note.description}
              notes={props.notes}
              setNotes={props.setNotes}
            />
          );
        })}
    </div>
  );
}

export default NotesList;
