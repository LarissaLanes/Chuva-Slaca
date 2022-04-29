import { DivVideo, Section1, Section2 } from "../styled/VideoPage-styled";
import "../styled/style.css";
import perfilVideo from "../assets/perfil.png"
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import doi from "../assets/doi.png"
import dowload from "../assets/download.png"

const VideoPage = () => {
    return(
        <DivVideo id="presentation">
            <Section1>
                 <div> 
                    <h2>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </h2>
                </div> 
                <section className="background-image">
                    <article>
                        <>
                        <h2>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </h2>
                        <img src={perfilVideo}/>
                        <div>
                        <h1>Beatriz Christiane Melo</h1>
                        <h3>FCA / Universidade Estadual de Campinas</h3>
                        </div>
                        </>
                     </article>
                </section> 
            </Section1>
            <Section2 id="theme">
                <div>
                    <ul>
                        <li>
                            <button id="Button-download">
                                <DownloadRoundedIcon/>
                                {/* <img src={dowload}/> */}
                                Download
                            </button>
                        </li>
                        <li>
                            <button id="Button-star"><StarRoundedIcon/></button>
                        </li>
                        <li>
                            <button><img src={doi}/></button>
                        </li>
                    </ul> 
                    <h4>COMO CITAR ESSE TRABALHO?</h4>
                </div>
                <section className="border-create" >
                    <article className="border-create">
                        <h2>Detalhes</h2>
                    </article>
                    <aside>
                        <p>
                        Tipo de Apresentação: 
                        <h5> Pôster</h5>
                        <br/>
                         <br/>
                        Eixo temático: 
                        <h5>Alimentação e saúde (AS) </h5>
                        <br/>
                        Palavras-chaves: <h5>Alimentos funcionais, alimentação escolar.</h5>
                        <br/>
                        <br/>
                        <h5>  Autores:</h5>
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
                        <h4>
                         ¹Universidade Estadual de Campinas
                        ²Universidade de São Paulo
                        ³Instituto Nacional de Pesquisas Espaciais
                        ⁴Universidade Federal do Rio de Janeiro.
                        </h4>
                       
                        </p>
                       
                    </aside>
                </section>
            </Section2>
        </DivVideo>
    );
};

export default VideoPage;
          