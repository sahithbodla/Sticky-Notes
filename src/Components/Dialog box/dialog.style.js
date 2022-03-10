import styled from "styled-components";
export const Dialog = styled.div`
display:flex;
flex-direction:column;
padding:1rem;
width:330px;
margin:7rem auto;
background-color:var(--primary-color);
box-shadow: var(--box-color-tb) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
export const Button = styled.button`
padding:0.2rem;
margin:1rem;
`;
export const ButtonDiv=styled.div`
display:flex;
justify-content:center;
padding:1rem;
`
export const DialogModal=styled.div`
position: fixed;
padding: 2rem;
width: 100%; 
height: 100%; 
background-color: rgba(0,0,0,0.5);
z-index:1;

`