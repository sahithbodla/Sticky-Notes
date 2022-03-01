export function createNewLabel(labelName, dispatch, setLabelName,setOpenTag) {
    if(labelName!==''){
      dispatch({ type: "CREATE_NEW_LABEL", payload: labelName });
      dispatch({type:'SET_LABEL_TO_NOTE',payload:labelName})
      setLabelName("");
      setOpenTag(false)
    }
   else{
     alert('Label Name Required')
   }
  }

  export function addNote(
    noteRef,
    dispatch,
    title,
    notesContent,
    noteColor,
    id,
    label
  ) {
    if (title !== "" && notesContent !== "") {
      dispatch({
        type: "CREATE_NEW_NOTE",
        payload: {
          title: title,
          notesContent: notesContent,
          noteColor: noteColor,
          id: id,
          label: label,
        },
      });
    }
    dispatch({ type: "SET_TITLE", payload: "" });
    noteRef.current.innerText = "";
  }
  