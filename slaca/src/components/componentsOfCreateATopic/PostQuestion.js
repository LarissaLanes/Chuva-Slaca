import { DivPostQuestion } from "../../styled/styledComponentsTopic/PostQuestion-styled";
import TextField from '@mui/material/TextField';

const PostQuestion = () => {
    return(
        <DivPostQuestion>
            <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
            <h3>Assunto</h3>
            <TextField id="Input-Outlined" label="Defina um tópico sucinto para notificar os autores..." variant="outlined" />
            <h3>Conteúdo</h3>
            <TextField rows={4} id="Input-Multiline"  multiline variant="outlined"/>
            <div>
                <>icon1</>
                <>icon2</>
                <button>Enviar</button>
            </div>


        </DivPostQuestion>
    )
}

export default PostQuestion;