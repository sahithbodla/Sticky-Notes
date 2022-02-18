import { useState, useRef, useReducer } from "react";
import {
  NotesBody,
  NotesHolder,
  Title,
  NoteFeatures,
  AddNotes,
  NotesValue,
} from "./style";
import { v4 as id } from 'uuid';
import { ListOfNotes } from "../../Components/NewNote/newNote";
import { SelectColors } from "../../Components/ColorPallete/colorSelector";
import {notesReducer} from '../../Reducers/noteReducer'
export function Home() {
  const [InputNotes, setInputNotes] = useState(false);
  const[noteColor,setNoteColor]=useState('var(--primary-color)')
  const [state, dispatch] = useReducer(notesReducer,{
    title: "",
    notesContent: "",
    arrayOfNotes: [],
  });
  const {title,notesContent,arrayOfNotes}=state;
  let noteRef = useRef(null);
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
            onClick={() => setInputNotes(true)}
            onInput={(event) =>
              dispatch({ type: "SET_CONTENT", payload: event.target.innerText })
            }
          ></NotesValue>
          {InputNotes && (
            <NoteFeatures>
              <SelectColors setNoteColor={setNoteColor} />
              <AddNotes onClick={() => addNote(noteRef,dispatch,title,notesContent,noteColor,id())}>ADD</AddNotes>
            </NoteFeatures>
          )}
        </NotesHolder>
        <ListOfNotes arrayOfNotes={arrayOfNotes} dispatch={dispatch} />
      </NotesBody>
    </>
  );
}


export function addNote(noteRef,dispatch,title,notesContent,noteColor,id) {
  if (title !== "" && notesContent !== "") {
    dispatch({
      type: "CREATE_NEW_NOTE",
      payload: {
        title: title,
        notesContent: notesContent,
        noteColor: noteColor,
        id:id
      },
    });
  }
  dispatch({type:'SET_TITLE',payload:''})
  noteRef.current.innerText = "";
}