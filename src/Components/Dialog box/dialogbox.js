import { UseStateContext } from "../../Context/stateContext";
import { Button, ButtonDiv, Dialog, DialogModal } from "./dialog.style";
import { NotesDialogBox } from "./dialogBox.note";

export function DialogBox() {
  const {
    state: { id,showIndividualNotes },
    dispatch,
  } = UseStateContext();
  return (
    <>
      <DialogModal>
        {showIndividualNotes?<NotesDialogBox id={id}/>:(
          <Dialog>
            <span>Are you sure? You want to delete notes</span>
            <ButtonDiv>
              <Button
                onClick={() => dispatch({ type: "DELETE_NOTE", payload: id })}
              >
                Delete
              </Button>
              <Button
                onClick={() =>
                  dispatch({
                    type: "SHOW_DIALOG_BOX",
                    payload: { flag: false },
                  })
                }
              >
                Cancel
              </Button>
            </ButtonDiv>
          </Dialog>
        )}
      </DialogModal>
    </>
  );
}
