import { useState, useRef, useReducer, useEffect } from "react";
import {
  NotesBody,
  NotesHolder,
  Title,
  NoteFeatures,
  AddNotes,
  NotesValue,
  ClearNotes,
} from "./style";
import { v4 as id } from "uuid";
import { ListOfNotes } from "../../Components/NewNote/newNote";
import { SelectColors } from "../../Components/ColorPallete/colorSelector";
import { notesReducer } from "../../Reducers/noteReducer";
export function Home() {
  const [InputNotes, setInputNotes] = useState(false);
  const [noteColor, setNoteColor] = useState("var(--primary-color)");
  let noteRef = useRef(null);
  const [state, dispatch] = useReducer(notesReducer, {
    title: "",
    notesContent: "",
    arrayOfNotes: [],
  });
  const { title, notesContent, arrayOfNotes } = state;
  useEffect(() => {
    const notesFromLocalStorage = JSON.parse(localStorage?.getItem("notes"));
    dispatch({
      type: "SET_NOTES",
      payload: notesFromLocalStorage === null ? [] : notesFromLocalStorage,
    });
    noteRef.current.focus();
  }, []);
  return (
    <>
      <NotesBody>
        <NotesHolder style={{ backgroundColor: `${noteColor}` }}>
          {InputNotes && (
            <Title
              style={{ backgroundColor: `${noteColor}` }}
              name={"title"}
              value={state.title}
              onChange={(event) =>
                dispatch({ type: "SET_TITLE", payload: event.target.value })
              }
              placeholder="Title"
            />
          )}
          <NotesValue
            contentEditable="true"
            role="textbox"
            ref={noteRef}
            onClick={() => {
              setInputNotes(true);
            }}
            onInput={(event) =>
              dispatch({ type: "SET_CONTENT", payload: event.target.innerText })
            }
          ></NotesValue>
          {InputNotes && (
            <NoteFeatures>
              <SelectColors setNoteColor={setNoteColor} />
              <ClearNotes onClick={() => clearNotes(dispatch, noteRef)}>
                CLEAR
              </ClearNotes>
              <AddNotes
                onClick={() =>
                  addNote(
                    noteRef,
                    dispatch,
                    title,
                    notesContent,
                    noteColor,
                    id()
                  )
                }
              >
                ADD
              </AddNotes>
            </NoteFeatures>
          )}
        </NotesHolder>
        <ListOfNotes arrayOfNotes={arrayOfNotes} dispatch={dispatch} />
      </NotesBody>
    </>
  );
}
export function clearNotes(dispatch, noteRef) {
  noteRef.current.innerText = "";
  dispatch({ type: "SET_TITLE", payload: "" });
}
export function addNote(noteRef, dispatch, title, notesContent, noteColor, id) {
  if (title !== "" && notesContent !== "") {
    dispatch({
      type: "CREATE_NEW_NOTE",
      payload: {
        title: title,
        notesContent: notesContent,
        noteColor: noteColor,
        id: id,
      },
    });
  }
  dispatch({ type: "SET_TITLE", payload: "" });
  noteRef.current.innerText = "";
}
