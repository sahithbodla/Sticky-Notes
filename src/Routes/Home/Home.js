import { useState,useRef } from "react";
import {
  NotesBody,
  NotesHolder,
  Title,
  NoteFeatures,
  AddNotes,
  NotesValue,
} from "./style";
import {ListOfNotes} from '../../Components/NewNote/newNote'
import { SelectColors } from "../../Components/ColorPallete/colorSelector";
export let arrayOfNotes = [];
export function Home() {
  const [title, setTitle] = useState("");
  const [InputNotes, setInputNotes] = useState(false);
  const [notesContent, setNotesContent] = useState("");
  const [noteColor,setNoteColor]=useState('var(--primary-color)')
  let noteRef=useRef(null)
  function addNote() {
    if (title !== "" && notesContent !== "") {
      arrayOfNotes = [...arrayOfNotes, { title, notesContent,noteColor }];
    }
    setTitle("");
    noteRef.current.innerText=''
  }

  return (
    <>
    <NotesBody>
      <NotesHolder style={{backgroundColor:`${noteColor}`}}>
        {InputNotes && (
          <Title
           style={{backgroundColor:`${noteColor}`}}
            name={"title"}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Title"
          />
        )}
        <NotesValue
          contentEditable="true"
          role="textbox"
          ref={noteRef}
          onClick={() => setInputNotes(true)}
          onInput={(event) =>
            setNotesContent(event.target.innerText)
          }
        >
        </NotesValue>
        {InputNotes && (
          <NoteFeatures>
            <SelectColors setNoteColor={setNoteColor}/>
            <AddNotes onClick={() => addNote()}>ADD</AddNotes>
          </NoteFeatures>
        )}
      </NotesHolder>
      <ListOfNotes noteColor={noteColor}/>
    </NotesBody>
    </>
  );
}
