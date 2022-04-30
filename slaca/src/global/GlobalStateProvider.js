import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext"

const GlobalStateProvider = (props) => {
    const [initialState, setInitialState] = useState(true)
    const [secondaryState, setSecondaryState] = useState(true)

    const handleClickFalse = () => {
        setInitialState(false)
    }

    const handleClickTrue = () => {
        setInitialState(true)
    }

    const handleSecondaryClickTrue = () => {
        setSecondaryState(true)
    }

    const handleSecondaryClickFalse = () => {
        setSecondaryState(false)
    }

    const data = {
        initialState,
        handleClickFalse,
        handleClickTrue,
        secondaryState,
        handleSecondaryClickTrue,
        handleSecondaryClickFalse


    }

    return (
        <div>
            <GlobalStateContext.Provider value={data}>
                {props.children}
            </GlobalStateContext.Provider>
        </div>
    )
}

export default GlobalStateProvider;