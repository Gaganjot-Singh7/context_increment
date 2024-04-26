import { createContext, useContext,useState } from "react";

export const Context=createContext();


export const valueContext=()=>{
    return useContext(Context)
}


 


