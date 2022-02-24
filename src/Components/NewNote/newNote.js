import { useState } from "react";
import { UseStateContext } from "../../Context/stateContext";
import { NoteFeatures } from "../../Routes/Home/style";
import { DeleteIcon } from "../../Svgs";
import { SelectColors } from "../ColorPallete/colorSelector";
import { Notes, NotesContent, NotesList, NotesTitle } from "./style";

export const ListOfNotes = () => {
  const {
    state: { arrayOfNotes },
    dispatch,
  } = UseStateContext();
  return (
    <NotesList>
      {arrayOfNotes.length !== 0 &&
        arrayOfNotes.map(({ title, notesContent, noteColor, id,label }) => (
          <NewNote
            title={title}
            notesContent={notesContent}
            noteColor={noteColor}
            id={id}
            dispatch={dispatch}
            label={label}
          />
        ))}
    </NotesList>
  );
};
export const NewNote = ({ id, title, notesContent, noteColor, dispatch,label }) => {
  const [color, setColor] = useState(noteColor);
  console.log({label})
  // const [features, setFeatures] = useState(false);
  return (
    <Notes
      style={{ backgroundColor: `${color}` }}
      // onMouseEnter={() => setFeatures(true)}
      // onMouseLeave={()=>setFeatures(false)}
    >
      <NotesTitle contentEditable="true" role="textbox">
        {title}
      </NotesTitle>
      <NotesContent contentEditable="true" role="textbox">
        {notesContent}
      </NotesContent>
        <NoteFeatures>
          <SelectColors setNoteColor={setColor} />
          <p>{label}</p>
          <DeleteIcon dispatch={dispatch} id={id} />
        </NoteFeatures>
    </Notes>
  );
};
