import { DivNewTopic } from "../../styled/styledComponentsTopic/NewTopic-styled";
import check from "../../assets/check.png"
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

const NewTopic = () => {
    const { handleSecondaryClickTrue } = useContext(GlobalStateContext)

    return (
        <DivNewTopic>
            <h3>Seu tópico foi enviado com sucesso! :D</h3>
            <p>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>
            <h5>Descubra outros trabalhos!</h5>
            <button onClick={handleSecondaryClickTrue}>criar novo tópico</button>
            <aside>
                <div>
                    <img src={check} />
                    <h3>Aguardando feedback dos autores</h3>
                    <p>Editar tópico</p>
                </div>
                <article>
                    <h4>
                        Assunto da pergunta aparece aqui
                    </h4>
                    <h5>Carlos Henrique Santos</h5>
                    <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
                </article>
            </aside>
        </DivNewTopic>

    )
}

export default NewTopic;