import { useState } from "react";
import { UseStateContext } from "../../Context/stateContext";
import { DivTag, NoteFeatures } from "../../Routes/Home/Homepage.style";
import { DeleteIcon } from "../../Svgs";
import { More } from "../../Svgs/menu";
import { SelectColors } from "../ColorPallete/colorSelector";
import { LabelList } from "../Labels/label";
import { Notes, NotesContent, NotesTitle } from "./notes.style";

export const NewNote = ({ id, title, notesContent, noteColor, label }) => {
  const { dispatch } = UseStateContext();
  const [openTag, setOpenTag] = useState(false);
  return (
    <Notes style={{ backgroundColor: `${noteColor}` }}>
      <NotesTitle contentEditable="true" role="textbox">
        {title}
      </NotesTitle>
      <NotesContent contentEditable="true" role="textbox">
        {notesContent}
      </NotesContent>
      <NoteFeatures>
        <SelectColors id={id}/>
        <DivTag onClick={() => setOpenTag((flag) => !flag)}>
          <span>{label}</span>
          <More />
        </DivTag>
        {openTag && (
          <LabelList
            id={id}
            setOpenTag={setOpenTag}
          />
        )}
        <DeleteIcon dispatch={dispatch} id={id} />
      </NoteFeatures>
    </Notes>
  );
};
