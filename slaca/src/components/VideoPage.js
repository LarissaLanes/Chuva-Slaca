import { DivVideo, Section1, Section2 } from "../styled/VideoPage-styled";
import "../styled/style.css";
import perfilVideo from "../assets/perfil.png"

const VideoPage = () => {
    return(
        <DivVideo>
            <Section1>
                <div>
                    <h2>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </h2>
                </div>
                <section>
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
                <h4>COMO CITAR ESSE TRABALHO?</h4>
                </section>
            </Section1>
            <Section2 >
                <div className="background-image">
                    <h1>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </h1>

                    <article>
                    <img src={perfilVideo}/>
                    <h1>Beatriz Christiane Melo</h1>
                    <h3>FCA / Universidade Estadual de Campinas</h3>
                    </article>
                   
                </div>
                <section>
                    <article>
                        <h2>Detalhes</h2>
                    </article>
                    <aside>
                        <p>
                        Tipo de Apresentação: Pôster
                        <br/>
                        Eixo temático: Alimentação e saúde (AS) 
                        <br/>
                        Palavras-chaves: Alimentos funcionais, alimentação escolar.
                        <br/>
                        Autores:
                        <br/>
                        Galileo Galilei¹
                        <br/>
                        Berta Lange de Morretes²
                        <br/>
                        Isaac Newton³
                        <br/>
                        Cesar Lattes¹
                        <br/>
                        Stephen Hawking⁴
                        <br/>
                         ¹Universidade Estadual de Campinas
                        ²Universidade de São Paulo
                        ³Instituto Nacional de Pesquisas Espaciais
                        ⁴Universidade Federal do Rio de Janeiro
                        </p>
                       
                    </aside>
                </section>
            </Section2>
            
        </DivVideo>
    );
}

export default VideoPage;