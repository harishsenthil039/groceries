import { createContext, useEffect, useState } from "react";
import { veg_list } from "../assets/Assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

     
    const contextValue={
                veg_list
               
    }

    


    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider