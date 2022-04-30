import { DivCreateTopic } from "../styled/CreateTopic-styled";
import Created from "./componentsOfCreateATopic/Created";
import Questions from "./Questions";
import "../styled/style.css"


const CreateTopic = () => {

    return (
        <DivCreateTopic id="works">
            <div className="border-create">
                <section>
                    <h2>Discussões</h2>
                </section>
                <Created />
                <>
                    <Questions />
                    <Questions />
                </>
            </div>
        </DivCreateTopic>
    )
}

export default CreateTopic;