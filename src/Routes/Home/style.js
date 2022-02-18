import styled from "styled-components";
import { Input } from "../../Components/SearchBar/search";

export const NotesBody=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
export const NotesHolder=styled.div`
margin:5rem;
padding:0.5rem;
width:500px;
box-shadow: var(--box-color-tb) 0px 3px 6px, var(--box-color-rl) 0px 3px 6px;
border-radius:1rem;
`
export const Title=styled(Input)`
width:30rem;
background-color:var(--primary-color);
font-size:${props=>props.name==='title'?'x-large':'large'}
`
export const PrimaryButton=styled.button`
background-color:transparent;
border:none;
border-radius:0.3rem;
padding:0.4rem 1rem;
margin:1rem;
cursor:pointer;
color:var(--secondary-color);

`
export const NotesValue= styled.div`

&:empty::before{
    content:'Take Notes Here...'
}
border:none;
outline:none;
resize: none;
width:30rem;
padding:0.5rem;
font-size:large
`

export const AddNotes=styled(PrimaryButton)`
background-color:var( --add-btn);
font-weight:bold;
color:var(--secondary-color)
&:hover{
    color:var(--primary-color)
}

`
export const NoteFeatures=styled(NotesBody)`
flex-direction:row;
justify-content:space-between;
padding:0.5rem;
`
export const ListOfNotes=styled(NotesBody)`
flex-direction:row;
align-items:center;
justify-content:center;
flex-wrap:wrap;
`
