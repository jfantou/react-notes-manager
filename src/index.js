import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { PageNotFound } from "pages/PageNotFound/PageNotFound";
import { NoteBrowse } from "pages/NoteBrowse/NoteBrowse";
import { Note } from "pages/Note/Note";
import { NoteCreate } from "pages/NoteCreate/NoteCreate";
import { App } from "App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="/" element={<NoteBrowse/>}></Route>
            <Route path="/note/:id" element={<Note/>}></Route>
            <Route path="/note/new" element={<NoteCreate/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
