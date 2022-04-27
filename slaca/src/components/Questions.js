import { DivQuestions } from "../styled/Questions-styled";
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const Questions = () => {
    return(
        <DivQuestions>
            <article>
                    <h4>Assunto da pergunta aparece aqui</h4>
                    <h5>Carlos Henrique Santos</h5>
                <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
                <div>
                    <MoreVertRoundedIcon color="warning"/>
                    <FavoriteRoundedIcon color="warning" />
                    1 like
                    1 resposta
                </div>
            </article>
            <article>
                    <h4>Assunto da pergunta aparece aqui</h4>
                    <h5>Carlos Henrique Santos</h5>
                <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
                <div>
                    <MoreVertRoundedIcon color="warning" />
                    <FavoriteRoundedIcon color="warning"/>
                    1 like
                    1 resposta
                </div>
            </article>
        </DivQuestions>
    )
}

export default Questions;