import { useState } from "react";
import { UseStateContext } from "../../Context/stateContext";
import { DivTag, NoteFeatures } from "../../Routes/Home/style";
import { DeleteIcon } from "../../Svgs";
import { More } from "../../Svgs/menu";
import { SelectColors } from "../ColorPallete/colorSelector";
import { LabelList } from "../Labels/label";
import { Notes, NotesContent, NotesTitle } from "./style";

export const NewNote = ({ id, title, notesContent, noteColor, label }) => {
  const { dispatch } = UseStateContext();
  const [localTag, setLocalTag] = useState(label);
  const [color, setColor] = useState(noteColor);
  const [openTag, setOpenTag] = useState(false);
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
        <DivTag onClick={() => setOpenTag((flag) => !flag)}>
          <span>{localTag}</span>
          <More />
        </DivTag>
        {openTag && (
          <LabelList
            id={id}
            setLocalTag={setLocalTag}
            setOpenTag={setOpenTag}
          />
        )}
        <DeleteIcon dispatch={dispatch} id={id} />
      </NoteFeatures>
    </Notes>
  );
};
