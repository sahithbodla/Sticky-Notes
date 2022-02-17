import styled from "styled-components";
import { arrayOfNotes } from "../../Routes/Home/Home";
import { NotesHolder, NotesValue } from "../../Routes/Home/style";

export const NotesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

`;
export const NotesTitle = styled(NotesValue)`
  font-weight: bolder;
  width: 300px;

  &:empty::before {
    content: "Title";
  }
`;
export const Notes = styled(NotesHolder)`
  width: 320px;
`;
export const NotesContent = styled(NotesValue)`
  width: 300px;
`;
export const ListOfNotes = () => {
  return (
    <NotesList>
      {arrayOfNotes.length !== 0 &&
        arrayOfNotes.map(({ title, notesContent }) => (
          <Notes>
            <NotesTitle contentEditable="true" role="textbox">
              {title}
            </NotesTitle>
            <NotesContent contentEditable="true" role="textbox">
              {notesContent}
            </NotesContent>
          </Notes>
        ))}
    </NotesList>
  );
};
