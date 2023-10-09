'use client'
import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";
import { apiData } from "@/apiData/object";

type CustomDataTypes = {}

interface ContextProps {
    res: CustomDataTypes[];
    setRes: Dispatch<SetStateAction<CustomDataTypes[]>>
}

const GlobalContext = createContext<ContextProps>({
    res: apiData,
    setRes: (): CustomDataTypes[]=> []
})

// Create Your Own Provider
export const GlobalContextProvider = ({children} :{children: React.ReactNode} )=>{
    const  [res, setRes]= useState<[] | CustomDataTypes[]>([]);

    return (
        <GlobalContext.Provider value={{res, setRes}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = ()=> useContext(GlobalContext);