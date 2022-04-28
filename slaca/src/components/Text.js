import { DivText } from "../styled/Text-styled";
import Accordions from "./bootstratp/Accordion";
import "../styled/style.css"

const Text = () => {
    return(
        <DivText id="authors">
            <div className="border-create">
                <section>
                    <h2>Resumo</h2>
                </section>
                <article>
                    <Accordions/>
                </article>
            </div>
        </DivText>
    )
}

export default Text;