import { useState, useRef, useEffect } from "react";
import {
  NotesBody,
  NotesHolder,
  Title,
  NoteFeatures,
  AddNotes,
  NotesValue,
  ClearNotes,
  DivTag,
} from "./style";
import { v4 as id } from "uuid";
import { ListOfNotes } from "../../Components/NewNote/newNote";
import { SelectColors } from "../../Components/ColorPallete/colorSelector";
import { More } from "../../Svgs/menu";
import { UseStateContext } from "../../Context/stateContext";
import { LabelList } from "../../Components/Labels/label";
export function clearNotes(dispatch, noteRef) {
  noteRef.current.innerText = "";
  dispatch({ type: "SET_TITLE", payload: "" });
}
export function addNote(noteRef, dispatch, title, notesContent, noteColor, id,label) {
  if (title !== "" && notesContent !== "") {
    dispatch({
      type: "CREATE_NEW_NOTE",
      payload: {
        title: title,
        notesContent: notesContent,
        noteColor: noteColor,
        id: id,
        label:label
      },
    });
  }
  dispatch({ type: "SET_TITLE", payload: "" });
  noteRef.current.innerText = "";
}
export function Home() {
  const {
    state: { title, notesContent,label },
    dispatch
  } = UseStateContext();
  console.log('2',{label})
  const [InputNotes, setInputNotes] = useState(false);
  const [openTag, setOpenTag] = useState(false);
  const [noteColor, setNoteColor] = useState("var(--primary-color)");
  let noteRef = useRef(null);

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
      <NotesBody>
        <NotesHolder style={{ backgroundColor: `${noteColor}` }}>
          {InputNotes && (
            <Title
              style={{ backgroundColor: `${noteColor}` }}
              name={"title"}
              value={title}
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
              <DivTag onClick={()=>setOpenTag(flag=>!flag)}>
              <span >{label}</span>
              <More/>
              </DivTag>
              
              {openTag && <LabelList setOpenTag={setOpenTag}/>}
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
                    id(),
                    label
                  )
                }
              >
                ADD
              </AddNotes>
            </NoteFeatures>
          )}
        </NotesHolder>
        <ListOfNotes id={id()} />
      </NotesBody>
    </>
  );
}


