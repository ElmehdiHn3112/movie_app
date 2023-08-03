import { createContext, useState, useEffect, useReducer } from "react";

import AppReducer from "./AppReducer";


let data = "";

const initiaState = data
export const GlobaleContext = createContext(initiaState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initiaState)

    return (
        <GlobaleContext.Provider value={{
            data
        }}>

            {children}

        </GlobaleContext.Provider>
    )

}