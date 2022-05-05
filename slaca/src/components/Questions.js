import { DivQuestions } from "../styled/Questions-styled";
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import "../styled/style.css"
import check from "../assets/checkOrange.png"
import quadro from "../assets/button bgqaudro.png"
import heart from "../assets/green apples 22heart.png"

const Questions = () => {
    return (
        <DivQuestions>
            <article>
                <Accordion variant="contained" id="accordion">
                    <AccordionSummary>
                        <Typography sx={{ width: "95%", flexShrink: 0 }} className="request">
                            <h4>Assunto da pergunta aparece aqui</h4>
                            <h5>Carlos Henrique Santos</h5>
                            <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
                            <aside>
                                <MoreVertRoundedIcon color="warning" id="tres-pontos"/>
                                <img id="quadro" src={quadro}/>
                                <FavoriteRoundedIcon id="heart"/>
                                <div id="text-likes">
                                    1 like
                                    1 resposta
                                </div>
                            </aside>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="response1">
                        <Typography sx={{ width: "95%", flexShrink: 0 }} >
                            <div id="responses">
                                <h5>Adriano da Silva</h5>
                                <>
                                    <h4>Autor</h4>
                                    <img src={check} />
                                </>
                            </div>
                            <p> Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails className="response2">
                        <Typography sx={{ width: "95%", flexShrink: 0 }} >
                            <div>
                                <h5>Carlos Henrique Santos</h5>
                            </div>
                            <p> Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails className="response1">
                        <Typography sx={{ width: "95%", flexShrink: 0 }} >
                            <div id="responses">
                                <h5>Carmila Ferreira Andrade</h5>
                                <>
                                    <h4>Autor</h4>
                                    <img src={check} />
                                </>
                            </div>
                            <p>
                                Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
                             Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
                            </p>
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails className="response1">
                        <Typography sx={{ width: "95%", flexShrink: 0 }} >
                            <div id="responses">
                                <h5>Ana Carolina</h5>
                                <>
                                    <h4>Autor</h4>
                                    <img src={check} />
                                </>
                            </div>
                            <p>
                                Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </article>
        </DivQuestions>
    )
}

export default Questions;