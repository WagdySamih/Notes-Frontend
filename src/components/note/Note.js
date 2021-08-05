import classes from "./Note.module.scss";

import editIcon from"../../assets/icons/edit-note.svg";
import deleteIcon from'../../assets/icons/delete-note.svg';
function Note() {
  return (
    <section className={classes.card}>
      <div className={classes.title}>this is any fuckin text</div>
      <div className={classes.content}>this is any fuckin text again</div>

      <div class={classes.noteManage}>
        <button>
          <img src={deleteIcon} alt="delete icon" />
        </button>
        <button>
          <img src={editIcon} alt="delete icon" />
        </button>
      </div>
    </section>
  );
}

export default Note;
