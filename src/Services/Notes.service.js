import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1234/",
});

const getNotes = async (search) => {
  let params = {};
  if (search) params.search = search;
  try {
    return (await api.get("notes", { params })).data;
  } catch (error) {
    console.log(error);
    // send to logs
  }
};

const deleteNote = async (noteId) => {
  try {
    await api.delete(`notes/${noteId}`);
    return await getNotes();
  } catch (error) {
    console.log(error);
    // send to logs
  }
};

const editNote = async (noteId, data) => {
  try {
    await api.patch(`notes/${noteId}`, { ...data });
    return await getNotes();
  } catch (error) {
    console.log(error);
    // send to logs
  }
};

const addNote = async (data) => {
  try {
    await api.post(`notes`, { ...data });
    return await getNotes();
  } catch (error) {
    console.log(error);
    // send to logs
  }
};

export { getNotes, editNote, addNote, deleteNote };
