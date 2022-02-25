import { NotesHolder, NotesValue } from "../../Routes/Home/style";
import styled from "styled-components";
export const NotesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
  margin: 1rem;
`;
export const NotesContent = styled(NotesValue)`
  width: 300px;
`;