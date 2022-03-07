import { useEffect } from "react";
import { UseStateContext } from "../../Context/stateContext";
import { ToastMessage } from "./toast";

export function Toast(){
    const{state:{toast},dispatch}=UseStateContext();
 
    useEffect(()=>{
        setTimeout(()=>{
            dispatch({type:'CLEAR_TOAST',payload:''})
        },3000)
       
    },[dispatch])
    return <ToastMessage>{toast}</ToastMessage>
}