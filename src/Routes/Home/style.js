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
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
border-radius:1rem;
`
export const Title=styled(Input)`
width:30rem;
background-color:var(--primary-color);
font-size:${props=>props.name==='title'?'x-large':'large'}
`
export const PrimaryButton=styled.button`
background-color:transparent;
border-color:var(--nav-bar);
border-radius:0.2rem;
padding:0.4rem 1rem;
margin:1rem;
`
export const NotesValue= styled.textarea`
border:none;
outline:none;
resize: none;
width:30rem;
padding:0.5rem;
font-size:large
`

export const AddNotes=styled(PrimaryButton)``
export const NoteFeatures=styled(NotesBody)``
export const ListOfNotes=styled.div`
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;   
    border-radius:1rem;
    padding:1rem;
    width:fitContent;
    height:9rem;
`