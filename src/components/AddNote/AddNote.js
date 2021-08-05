import classes from "./AddNote.module.scss";

function AddNote() {
  return (
    <section>
      <input className={classes.first_input} type="text" placeholder="Take a note..."/>
    </section>
  );
}

export default AddNote;
