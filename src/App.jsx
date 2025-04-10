import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NoteAPI } from "api/note-api"
import { useDispatch } from "react-redux";
import { setNoteList } from "store/note/note-slice";

export function App() {

  const dispatch = useDispatch();
  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return <div className="container-fluid">
    <Header/>
    <Outlet/>
  </div>;
}
