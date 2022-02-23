import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../Reducers/noteReducer";

export const StateContext=createContext();

export const StateProvider=({children})=>{
    const [state, dispatch] = useReducer(notesReducer, {
        title: "",
        notesContent: "",
        arrayOfNotes: [],
        tags :[
          {
            name: "remainder",
            listOfTags: [],
          },
        ]
      });
   return( <StateContext.Provider value={{state, dispatch}}>
        {children}
    </StateContext.Provider>)
}
export const UseStateContext=()=>{
    return useContext(StateContext)
}
