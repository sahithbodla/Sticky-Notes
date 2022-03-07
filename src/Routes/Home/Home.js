import { useState, useRef, useEffect } from "react";
import { NotesBody, NotesHolder } from "./Homepage.style";
import { v4 as id } from "uuid";
import { ListOfNotes } from "../../Components/Notes/listofNotes";
import { UseStateContext } from "../../Context/stateContext";
import { TitleDiv } from "../../Components/Body/title";
import { NotesDiv } from "../../Components/Body/notesValue";
import { NotesFeaturesDiv } from "../../Components/Body/notesFeatures";
import { Toast } from "../../Components/Toast/toast.style";
export function Home({filteredNotes}) {
  const {state:{toast},dispatch} = UseStateContext();
  const [InputNotes, setInputNotes] = useState(false);
  const [noteColor, setNoteColor] = useState("var(--primary-color)");
  console.log({toast})
  let noteRef = useRef(null);
  let props = { noteRef, noteColor, setNoteColor };

  useEffect(() => {
    const notesFromLocalStorage = JSON.parse(localStorage?.getItem("notes"));
    dispatch({
      type: "SET_NOTES",
      payload: notesFromLocalStorage === null ? [] : notesFromLocalStorage,
    });
    noteRef.current.focus();
  }, [dispatch]);
  return (
    <>
      {toast!==''&&<Toast/>}
      <NotesBody>
        <NotesHolder style={{ backgroundColor: `${noteColor}` }}>
          {InputNotes && <TitleDiv noteColor={noteColor} />}
          <NotesDiv noteRef={noteRef} setInputNotes={setInputNotes} />
          {InputNotes && <NotesFeaturesDiv props={props} />}
        </NotesHolder>
        <ListOfNotes filteredNotes={filteredNotes} id={id()} />
      </NotesBody>
    </>
  );
}
