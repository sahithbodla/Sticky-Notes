import styled from "styled-components";
export const Navbar = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color: var(--nav-bar);
  padding: 1rem;
  color: var(--secondary-color);
  cursor:pointer;
 
`;
export const Logo=styled.h2`
@media (max-width: 768px){
  font-size:large
}

`
export const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color:var(--primary-color);
`;