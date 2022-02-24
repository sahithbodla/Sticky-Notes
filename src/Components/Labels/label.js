import { useState } from "react";
import { UseStateContext } from "../../Context/stateContext";
import {
  AddLabel,
  CreateButton,
  InputTag,
  Label,
} from "../../Routes/Home/style";
import { AddIcon } from "../../Svgs/addIcon";

export function createNewLabel(labelName, dispatch, setLabelName,setOpenTag) {
  if(labelName!==''){
    dispatch({ type: "CREATE_NEW_LABEL", payload: labelName });
    setLabelName("");
    setOpenTag(false)
  }
 else{
   alert('Label Name Required')
 }

}

export function LabelList({ setOpenTag }) {
  const {
    state: { tags },
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
              setOpenTag(false);
              dispatch({ type: "SET_LABEL_TO_NOTE", payload: name });
            }}
          >
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
