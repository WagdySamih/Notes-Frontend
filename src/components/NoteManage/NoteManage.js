import classes from "./NoteManage.module.scss";
import { Formik, Form } from "formik";
import { InputText } from "./InputText/InputText";
import * as Yup from "yup";

let { editNote, addNote } = require("../../Services/Notes.service");
function NoteManage(props) {

  let mode = props._id ? "update" : "create";
  const validate = Yup.object({
    title: Yup.string().required("Title is required").max(
      500,
      "Maximum letters number is 500"
    ),
    description: Yup.string().required("Description is required").max(
      500,
      "Maximum letters number is 500"
    ),
  });

  async function onConfirm({ title, description }) {
    const note = {
      title,
      description,
    };
    mode === "create" ? await createNote(note) : await updateNote(note);
  }

  async function createNote(note) {
    const notes = await addNote(note);
    props.setNotes(notes);
  }

  async function updateNote(note) {
    const notes = await editNote(props._id, note);
    props.setNotes(notes);
  }

  function onCancel() {
    props.setOpenNoteManage(false);
  }

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.updateModal}>
          <Formik
            initialValues={{
              title: props?.title || "",
              description: props?.description || "",
            }}
            validationSchema={validate}
          >
            {(formik) => (
          
              <Form>
                <InputText
                  label="Title"
                  name="title"
                  type="title"
                  defaultValue={formik.values.title}
                  rows="2"
                />
                <InputText
                  label="Description"
                  name="description"
                  type="description"
                  defaultValue={formik.values.description}
                  rows="8"
                />

                <div className={classes.buttons}>
                  <button className={classes.cancel} onClick={() => onCancel()}>
                    Cancel
                  </button>
                  <button
                    disabled={!formik.isValid}
                    className={classes.confirm}
                    className={classes.confirm}
                    onClick={() => onConfirm(formik.values)}
                  >
                    Confirm
                  </button>

                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default NoteManage;
