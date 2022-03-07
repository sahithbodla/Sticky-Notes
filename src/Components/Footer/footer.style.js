import styled from "styled-components";
export const FooterDiv=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
bottom:0;
margin:1rem;
@media screen and (max-width: 600px){
   position:relative;
   display:flex; 
   flex-direction:column;
}
`