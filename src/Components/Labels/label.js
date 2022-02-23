import { useState } from "react";
import { UseStateContext } from "../../Context/stateContext";
import { AddLabel, CheckBox, CreateButton, InputTag, Label } from "../../Routes/Home/style";
import { AddIcon } from "../../Svgs/addIcon";

export function createNewLabel(labelName,dispatch,setLabelName) {
    dispatch({type:'ADD_LABEL',payload:labelName})
    setLabelName('')
  }

export function LabelList() {
    const {state:{tags},dispatch}=UseStateContext()
    const [openLabelcreator, setLabelcreator] = useState(false);
    const [labelName, setLabelName] = useState("");
    return (
      <AddLabel>
        {tags.map(({ name }) => (
          <Label>
            <CheckBox type="checkbox" />
            <span>{name}</span>
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
            <CreateButton onClick={() => createNewLabel(labelName,dispatch,setLabelName)}>Create</CreateButton>
          </>
        )}
      </AddLabel>
    );
  }