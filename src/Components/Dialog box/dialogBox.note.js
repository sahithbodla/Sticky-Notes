import { useState } from "react";
import { UseStateContext } from "../../Context/stateContext";
import { Notes, NotesContent, NotesTitle } from "../Notes/notes.style";

import { Button } from "./dialog.style";
export const NotesDialogBox = ({ id }) => {
 const {
    state: { arrayOfNotes },
    dispatch,
  } = UseStateContext();
  let currentNote = arrayOfNotes.find((notes) => notes.id === id);
  let { title, notesContent, noteColor } = currentNote;
  const [notesTitle, setNotesTitle] = useState(title);
  const [notesValue, setNotesvalue] = useState(notesContent);
  return (
    <Notes  style={{ backgroundColor: `${noteColor}`,margin:'7rem auto' }}>
      <NotesTitle
        onInput={(event) => setNotesTitle(event.target.innerText)}
        contentEditable="true"
        role="textbox"
      >
        {title}
      </NotesTitle>
      <NotesContent
        onInput={(event) => setNotesvalue(event.target.innerText)}
        contentEditable="true"
        role="textbox"
      >
        {notesContent}
      </NotesContent>
      <Button
        onClick={() =>
          updateNotes(notesTitle, notesValue, dispatch, arrayOfNotes, id)
        }
      >
        Save
      </Button>
    </Notes>
  );
};

export function updateNotes(
  notesTitle,
  notesValue,
  dispatch,
  arrayOfNotes,
  id
) {
  dispatch({
    type: "UPDATE_NOTE",
    payload: arrayOfNotes.map((note) =>
      note.id === id
        ? { ...note, title: notesTitle, notesContent: notesValue }
        : note
    ),
  });
}
