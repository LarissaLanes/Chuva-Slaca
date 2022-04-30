import { DivCreateTopic } from "../styled/CreateTopic-styled";
import NewTopic from "./componentsOfCreateATopic/NewTopic";
import PostQuestion from "./componentsOfCreateATopic/PostQuestion";
import Questions from "./Questions";
import "../styled/style.css"
import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext";


const ChangeState = () => {
    const { secondaryState } = useContext(GlobalStateContext)

    return (
        <DivCreateTopic id="works">
            <div className="border-create">
                <section>
                    <h2>Discussões</h2>
                </section>
                {secondaryState ? (<PostQuestion />) : (<NewTopic />)}
                <>
                    <Questions />
                    <Questions />
                </>
            </div>
        </DivCreateTopic>
    )
}

export default ChangeState;