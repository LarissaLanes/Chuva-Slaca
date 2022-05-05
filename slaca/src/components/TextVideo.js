import perfilVideo from "../assets/perfil.png"
import { Text, DivImg } from "../styled/TextVideo-styled";
import "../styled/style.css"


const TextVideo = () => {
    return(
        <Text>
            <div>
                <h3>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </h3>
            </div>
            <DivImg>
                <img src={perfilVideo}/>
                <div>
                    <h1>Beatriz Christiane Melo</h1>
                    <h4>FCA / Universidade Estadual de Campinas</h4>        
                </div>
            </DivImg>
        </Text>
    )
}

export default TextVideo;