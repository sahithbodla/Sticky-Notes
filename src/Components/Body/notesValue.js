import { UseStateContext } from "../../Context/stateContext";
import { NotesValue } from "../../Routes/Home/style";

export const NotesDiv =({noteRef,setInputNotes})=>{
    const {
        dispatch,
      } = UseStateContext();
   return( <NotesValue
    contentEditable="true"
    role="textbox"
    ref={noteRef}
    onClick={() => {
      setInputNotes(true);
    }}
    onInput={(event) =>
      dispatch({ type: "SET_CONTENT", payload: event.target.innerText })
    }
  ></NotesValue>)
}