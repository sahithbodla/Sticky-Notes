import { UseStateContext } from "../../Context/stateContext";
import { Button, ButtonDiv, Dialog, DialogModal } from "./dialog.style";

export function DialogBox() {
  const{state:{id},dispatch}=UseStateContext()
  return (
    <>
    <DialogModal>
      <Dialog>
        <span>Are you sure? You want to delete notes</span>
        <ButtonDiv>
          <Button onClick={()=>dispatch({type:'DELETE_NOTE',payload:id})} >Delete</Button>
          <Button onClick={()=>dispatch({type:'SHOW_DIALOG_BOX',payload:{flag:false}})}>Cancel</Button>
        </ButtonDiv>
      </Dialog>
      </DialogModal>
    </>
  );
}
