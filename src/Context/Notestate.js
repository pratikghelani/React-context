import React from "react";
import Notecontext from './Notecontext'

const Notestate = (props) => {
    const state = {
        "data": 5
    }
    return(
        <Notecontext.Provider value={state}>
            {props.children}
        </Notecontext.Provider>
    )   
}

export default Notestate;
