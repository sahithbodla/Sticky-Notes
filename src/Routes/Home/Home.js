import { useState } from "react";
import {
  NotesBody,
  NotesHolder,
  Title,
  NoteFeatures,
  AddNotes,
  ListOfNotes,
  NotesValue,
} from "./style";
export let arrayOfNotes = [];
export function Home() {
  const [title, setTitle] = useState("");
  const [InputNotes, setInputNotes] = useState(false);
  const [notesContent, setNotesConetent] = useState("");
  function addNote() {
    if (title !== "" && notesContent !== "") {
      arrayOfNotes = [...arrayOfNotes, { title, notesContent }];
    }
    setTitle("");
    setNotesConetent("");
  }

  return (
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
          value={notesContent}
          onClick={() => setInputNotes(true)}
          onChange={(event) => setNotesConetent(event.target.value)}
          placeholder="Take Notes Here..."
        />
        {InputNotes && (
          <NoteFeatures>
            <AddNotes onClick={() => addNote()}>ADD</AddNotes>
          </NoteFeatures>
        )}
      </NotesHolder>
      {arrayOfNotes.length !== 0 &&
        arrayOfNotes.map(({ title, notesContent }) => (
          <ListOfNotes key={title}>
            <h5>{title}</h5>
            <p>{notesContent}</p>
          </ListOfNotes>
        ))}
    </NotesBody>
  );
}
