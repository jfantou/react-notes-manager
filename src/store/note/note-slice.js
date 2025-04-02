import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: []
  },
  reducers: {
    setNoteList: (currentSlice, action) =>{
      currentSlice.noteList = action.payload;
      console.info("called")
    },
  },
});

export const noteReducer = noteSlice.reducer;

export const {setNoteList} = noteSlice.actions;