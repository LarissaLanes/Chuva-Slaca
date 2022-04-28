import { DivCreateTopic } from "../styled/CreateTopic-styled";
import Created from "./componentsOfCreateATopic/Created";
import NewTopic from "./componentsOfCreateATopic/NewTopic";
import PostQuestion from "./componentsOfCreateATopic/PostQuestion";
import Questions from "./Questions";
import "../styled/style.css"
import { useState } from "react";
import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import { useHistory } from "react-router";
import Footer from "./Footer";

const ChangeState = () => {
    const {secondaryState, handleClickTrue} = useContext(GlobalStateContext)

    return(
        <DivCreateTopic id="works">
            <div className="border-create">
                <section>
                    <h2>Discussões</h2>
                </section>
                {secondaryState ? (<PostQuestion/>) : ( <NewTopic/>)}
                <>
                    <Questions/>
                    <Questions/>
                </>
            </div>
        </DivCreateTopic>
    )
}

export default ChangeState;