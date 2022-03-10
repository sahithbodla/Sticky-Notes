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
        }
      });
       dispatch({ type: "SET_TITLE", payload: "" })
       noteRef.current.innerText = "";
    }else if(title === ""){
      dispatch({type:'TOAST',payload:'Title Name required'})
    }
    else if(notesContent === ""){
      dispatch({type:'TOAST',payload:'Enter notes content'})
    }
   
  }
  