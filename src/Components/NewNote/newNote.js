import { useState } from "react";
import { NoteFeatures } from "../../Routes/Home/style";
import { DeleteIcon } from "../../Svgs";
import { SelectColors } from "../ColorPallete/colorSelector";
import { Notes, NotesContent, NotesList, NotesTitle } from "./style";

export const ListOfNotes = ({ arrayOfNotes,dispatch }) => {
  return (
    <NotesList>
      {arrayOfNotes.length !== 0 &&
        arrayOfNotes.map(({ title, notesContent, noteColor,id }) => (
          <NewNote
            title={title}
            notesContent={notesContent}
            noteColor={noteColor}
            id={id}
            dispatch={dispatch}
          />
        ))}
    </NotesList>
  );
};
export const NewNote = ({id, title, notesContent, noteColor,dispatch }) => {
  const [color, setColor] = useState(noteColor);
  return (
    <Notes style={{ backgroundColor: `${color}` }}>
      <NotesTitle contentEditable="true" role="textbox">
        {title}
      </NotesTitle>
      <NotesContent contentEditable="true" role="textbox">
        {notesContent}
      </NotesContent>
      <NoteFeatures>
        <SelectColors setNoteColor={setColor} />
        <DeleteIcon dispatch={dispatch} id={id}/>
      </NoteFeatures>
    </Notes>
  );
};
