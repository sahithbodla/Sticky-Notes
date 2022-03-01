import { UseStateContext } from "../../Context/stateContext";
import { NewNote } from "./newNote";
import { NotesList } from "./notes.style";

export const ListOfNotes = () => {
    const {
      state: { arrayOfNotes }
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
              label={label}
            />
          ))}
      </NotesList>
    );
  };