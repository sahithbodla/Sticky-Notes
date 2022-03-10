import { UseStateContext } from "../Context/stateContext";

export function deleteNotes(dispatch,id){
  dispatch({type:'SHOW_DIALOG_BOX',payload:{flag:true,id}});
  
}

export const DeleteIcon = ({id}) => {
  const{dispatch}=UseStateContext()
  return (
    <svg onClick={()=>deleteNotes(dispatch,id)} width="1.5em" height="1.5em" viewBox="0 0 24 24">
      <path
        fill="red"
        d="m20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37l3.03 1.75M6 19V7h5.07L18 11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2m2 0h8v-6.8L10.46 9H8v10Z"
      ></path>
    </svg>
  );
};
