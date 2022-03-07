import styled from "styled-components";

export const colors = [
  {
    colorCode: "#fda4af",
    name: "red",
    fontColor:'black'
  },
  {
    colorCode: "var(--primary-color)",
    name: "white",
  },
  {
    colorCode: "#86efac",
    name: "green",
    fontColor:'black'
  },
  {
    colorCode: "var(--nav-bar)",
    name: "blue",
    fontColor:'black'
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
  @media (max-width: 768px){
    padding: 0.5rem;
    margin: 0.1rem;
  }
`;