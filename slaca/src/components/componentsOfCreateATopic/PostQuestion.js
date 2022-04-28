import { DivPostQuestion } from "../../styled/styledComponentsTopic/PostQuestion-styled";
import TextField from '@mui/material/TextField';
import "../../styled/style.css"
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import IconButton from '@mui/material/IconButton';
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import {useHistory} from "react-router-dom"

const PostQuestion = () => {
    const {handleClickTrue, handleSecondaryClickFalse} = useContext(GlobalStateContext)
    const history = useHistory()

    return(
        <DivPostQuestion>
            <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
            <h3>Assunto</h3>
            <TextField id="Input" fullWidth label="Defina um tópico sucinto para notificar os autores..." variant="outlined" />
            <h3>Conteúdo</h3>
            <TextField rows={4} fullWidth id="Input"  multiline variant="outlined" />
            <div className="border-question">
                <article>
                <IconButton>
                    <FormatBoldRoundedIcon/>
                </IconButton>
                <IconButton>
                    <FormatItalicRoundedIcon/>
                </IconButton>
                </article>
                <IconButton id="iconButton-back" onClick={handleClickTrue}>
                    <ArrowLeftRoundedIcon/>
                </IconButton>
            <button onClick={handleSecondaryClickFalse}>Enviar</button>
            </div>


        </DivPostQuestion>
    )
}

export default PostQuestion;