import { UseStateContext } from "../../Context/stateContext";
import { Color, ColorPicker, colors } from "./colorSelector.style";

export function changeColor(
  dispatch,
  arrayOfNotes,
  setNoteColor,
  Id,
  colorCode
) {
  if (Id) {
    dispatch({
      type: "UPDATE_NOTE",
      payload: arrayOfNotes.map((note) =>
        note.id === Id ? { ...note, noteColor: colorCode } : note
      ),
    });
  } else {
    setNoteColor(colorCode);
  }
}

export const SelectColors = ({ setNoteColor, id }) => {
  const {
    state: { arrayOfNotes },
    dispatch,
  } = UseStateContext();
  return (
    <ColorPicker>
      {colors.map(({ colorCode }) => {
        return (
          <Color
            style={{ backgroundColor: colorCode }}
            onClick={() =>
              changeColor(dispatch, arrayOfNotes, setNoteColor, id, colorCode)
            }
          ></Color>
        );
      })}
    </ColorPicker>
  );
};
