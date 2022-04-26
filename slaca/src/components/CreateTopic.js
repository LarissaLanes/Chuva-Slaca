import { DivCreateTopic } from "../styled/CreateTopic-styled";
import Created from "./componentsOfCreateATopic/Created";
import Questions from "./Questions";

const CreateTopic = () => {
    return(
        <DivCreateTopic>
            <div>
                <section>
                    <h2>Discussões</h2>
                </section>
                <div>
                    <Created/>
                </div>
                <div>
                    <Questions/>
                </div>
            </div>
        </DivCreateTopic>
    )
}

export default CreateTopic;