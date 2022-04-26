import { DivVideo, Section1, Section2 } from "../styled/VideoPage-styled";

const VideoPage = () => {
    return(
        <DivVideo>
            <Section1>
                <div>
                Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP 
                </div>
                <div>
                    <ul>
                        <li>
                            <button>Download</button>
                        </li>
                        <li>
                            <button>Estrela icon</button>
                        </li>
                        <li>
                            <button>doi icon</button>
                        </li>
                    </ul>
                COMO CITAR ESSE TRABALHO?
                </div>
            </Section1>
            <Section2>
                <div>
                    VIDEO
                </div>
                <div>
                Detalhes
                </div>
            </Section2>
            
        </DivVideo>
    )
}

export default VideoPage;