import { DivPostQuestion } from "../../styled/styledComponentsTopic/PostQuestion-styled";
import TextField from '@mui/material/TextField';
import "../../styled/style.css"
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import IconButton from '@mui/material/IconButton';

const PostQuestion = () => {
    return(
        <DivPostQuestion>
            <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
            <h3>Assunto</h3>
            <TextField id="Input" label="Defina um tópico sucinto para notificar os autores..." variant="outlined" />
            <h3>Conteúdo</h3>
            <TextField rows={4} id="Input"  multiline variant="outlined"/>
            <div className="border-question">
                <article>
                <IconButton aria-label="delete">
                    <FormatBoldRoundedIcon/>
                </IconButton>
                <IconButton aria-label="delete">
                    <FormatItalicRoundedIcon/>
                </IconButton>
                </article>
            <button>Enviar</button>
            </div>


        </DivPostQuestion>
    )
}

export default PostQuestion;