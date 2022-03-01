import { useState } from "react";
import { UseStateContext } from "../../Context/stateContext";
import {
  AddLabel,
  CreateButton,
  InputTag,
  Label,
} from "../../Routes/Home/style";
import { AddIcon } from "../../Svgs/addIcon";
import { createNewLabel } from "../../Utils/util";

export function LabelList({ setOpenTag,id }) {
  console.log(setOpenTag)
  const {
    state: {arrayOfNotes, tags },
    dispatch,
  } = UseStateContext();
  const [openLabelcreator, setLabelcreator] = useState(false);
  const [labelName, setLabelName] = useState("");
  return (
    <AddLabel>
      {tags.map(({ name }) => (
        <Label>
          {/* <CheckBox onChange={} type="checkbox" /> */}
          <span
            onClick={() => {
              if(id){
                dispatch({
                  type: "UPDATE_NOTE",
                  payload: arrayOfNotes.map((note) =>
                    note.id === id ? { ...note, label: name } : note
                  ),
                });
              }else{
                dispatch({ type: "SET_LABEL_TO_NOTE", payload: name });
              }
              setOpenTag(false);
            }}>
            {name}
          </span>
        </Label>
      ))}
      <Label onClick={() => setLabelcreator((flag) => !flag)}>
        <AddIcon />
        <span>Add New Tag</span>
      </Label>
      {openLabelcreator && (
        <>
          <InputTag
            value={labelName}
            placeholder="Enter Label Name"
            onChange={(event) => setLabelName(event.target.value)}
          />
          <CreateButton
            onClick={() => {
              createNewLabel(labelName, dispatch, setLabelName,setOpenTag);
            }}
          >
            Create
          </CreateButton>
        </>
      )}
    </AddLabel>
  );
}
