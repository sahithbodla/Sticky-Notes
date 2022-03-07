import { NewNote } from "./newNote";
import { NotesList } from "./notes.style";

export const ListOfNotes = ({filteredNotes}) => {
    return (
      <NotesList>
        {filteredNotes.length !== 0? 
          filteredNotes.map(({ title, notesContent, noteColor, id,label }) => (
            <NewNote
              title={title}
              notesContent={notesContent}
              noteColor={noteColor}
              id={id}
              label={label}
            />
          )):
          <h2>Notes Appear here....</h2>
          }
      </NotesList>
    );
  };