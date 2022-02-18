import styled from "styled-components";

const colors = [
  {
    color: "#fda4af",
    name: "red",
  },
  {
    color: "var(--primary-color)",
    name: "white",
  },
  {
    color: "#86efac",
    name: "green",
  },
  {
    color: "#3b82f6",
    name: "blue",
  },
];
export const ColorPicker = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Color = styled.button`
  border-radius: 50%;
  padding: 0.7rem;
  margin: 0.1rem;
  border: 1px solid var(--primary-color);
`;
export const SelectColors = ({setNoteColor}) => {
  return (
    <ColorPicker>
      {colors.map(({ color }) => {
        return <Color style={{ backgroundColor: color }} onClick={()=>setNoteColor(color)}></Color>;
      })}
    </ColorPicker>
  );
};
