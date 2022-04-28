import { DivCreateTopic } from "../styled/CreateTopic-styled";
import Created from "./componentsOfCreateATopic/Created";
import NewTopic from "./componentsOfCreateATopic/NewTopic";
import PostQuestion from "./componentsOfCreateATopic/PostQuestion";
import Questions from "./Questions";
import "../styled/style.css"

const CreateTopic = () => {
    return(
        <DivCreateTopic>
            <div className="border-create">
                <section>
                    <h2>Discussões</h2>
                </section>
                <>
                    {/* <Created/> */}
                    <PostQuestion/>
                    {/* <NewTopic/> */}
                </>
                <>
                    <Questions/>
                </>
            </div>
        </DivCreateTopic>
    )
}

export default CreateTopic;