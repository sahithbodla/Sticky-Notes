import { AddNotes, ClearNotes, DivTag, NoteFeatures } from "../../Routes/Home/style"
import { SelectColors } from "../ColorPallete/colorSelector"
import { LabelList } from "../Labels/label";
import { v4 as id } from "uuid";
import { addNote } from "../../Utils/util";
import { useState } from "react";
import { UseStateContext } from "../../Context/stateContext";
import { More } from "../../Svgs/menu";
export function clearNotes(dispatch, noteRef) {
    noteRef.current.innerText = "";
    dispatch({ type: "SET_TITLE", payload: "" });
  }
export const NotesFeaturesDiv=({props})=>{
    const{noteRef,noteColor,setNoteColor}=props
    const {
        state: { title,notesContent,label },
        dispatch,
      } = UseStateContext();
    const [openTag, setOpenTag] = useState(false);
    return(
        <NoteFeatures>
        <SelectColors setNoteColor={setNoteColor} />
        <DivTag onClick={() => setOpenTag((flag) => !flag)}>
          <span>{label}</span>
          <More />
        </DivTag>
        {openTag && <LabelList setOpenTag={setOpenTag} />}
        <ClearNotes onClick={() => clearNotes(dispatch, noteRef)}>
          CLEAR
        </ClearNotes>
        <AddNotes
          onClick={() =>
            addNote(
              noteRef,
              dispatch,
              title,
              notesContent,
              noteColor,
              id(),
              label
            )
          }
        >
          ADD
        </AddNotes>
      </NoteFeatures>
    )
}