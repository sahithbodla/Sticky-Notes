import { Color, ColorPicker,colors } from "./style";

export const SelectColors = ({setNoteColor}) => {
  return (
    <ColorPicker>
      {colors.map(({ colorCode}) => {
        return <Color style={{ backgroundColor: colorCode }} onClick={()=>setNoteColor(colorCode)}></Color>;
      })}
    </ColorPicker>
  );
};
