import { DivText } from "../styled/Text-styled";
import Accordions from "./bootstratp/Accordion";

const Text = () => {
    return(
        <DivText>
            <div>
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