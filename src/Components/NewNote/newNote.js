import { useState } from "react";
import { SelectColors } from "../ColorPallete/colorSelector";
import { Notes, NotesContent, NotesList, NotesTitle } from "./style";

export const ListOfNotes = ({arrayOfNotes}) => {
  return (
    <NotesList>
      {arrayOfNotes.length !== 0 &&
        arrayOfNotes.map(({ title, notesContent,noteColor }) => (
          <NewNote title={title} notesContent={notesContent} noteColor={noteColor} />
        ))}
    </NotesList>
  );
};
export const NewNote = ({ title, notesContent,noteColor }) => {
  const [color, setColor] = useState(noteColor);
  return (
    <Notes style={{ backgroundColor: `${color }` }}>
      <NotesTitle contentEditable="true" role="textbox">
        {title}
      </NotesTitle>
      <NotesContent contentEditable="true" role="textbox">
        {notesContent}
      </NotesContent>
      <SelectColors setNoteColor={setColor} />
    </Notes>
  );
};
