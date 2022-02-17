import { useState,useRef } from "react";
import { NewNote } from "../../Components/NewNote/newNote";
import {
  NotesBody,
  NotesHolder,
  Title,
  NoteFeatures,
  AddNotes,
  ListOfNotes,
  Notes,
  NotesValue,
} from "./style";
export let arrayOfNotes = [];
export function Home() {
  const [title, setTitle] = useState("");
  const [InputNotes, setInputNotes] = useState(false);
  const [notesContent, setNotesContent] = useState("");
  let noteRef=useRef(null)
  function addNote() {
    if (title !== "" && notesContent !== "") {
      arrayOfNotes = [...arrayOfNotes, { title, notesContent }];
    }
    setTitle("");
    noteRef.current.innerText=''
  }

  return (
    <>
    <NotesBody>
      <NotesHolder>
        {InputNotes && (
          <Title
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
            <AddNotes onClick={() => addNote()}>ADD</AddNotes>
          </NoteFeatures>
        )}
      </NotesHolder>
    </NotesBody>
        <ListOfNotes>
        {arrayOfNotes.length !== 0 &&
          arrayOfNotes.map(({ title, notesContent }) => (
            <NewNote title={title} notesContent={notesContent}   />
          ))}
        </ListOfNotes>
    </>
  );
}
