import styled from "styled-components"
import { NotesValue } from "../../Routes/Home/style"
export const TitleDiv=styled(NotesValue)`
font-weight:bolder;
&:empty::before{
    content:'Title';
}`
export const ContentDiv=styled(NotesValue)`

`
export const Notes=styled.div`
    width:fit-content;
    box-shadow: var(--box-color-tb) 0px 3px 6px, var(--box-color-rl) 0px 3px 6px;   
    border-radius:1rem;
    padding:1rem;
    height:9rem;
    margin:1rem;
`
export const NewNote=({title,notesContent})=>{
return(
    <Notes>
        <TitleDiv contentEditable="true"
          role="textbox">{title}</TitleDiv>
        <ContentDiv  contentEditable="true"
          role="textbox">{notesContent}</ContentDiv>
     </Notes>
)
}