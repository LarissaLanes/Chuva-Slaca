import {DivCreated} from "../../styled/styledComponentsTopic/Created-styled"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import hands from "../../assets/Vectorhands.png"
import hands2 from "../../assets/Vectorhands2.png"
import plant from "../../assets/Vectorplants.png"
import head from "../../assets/Vectorhead.png"
import corp from "../../assets/Vectorcorp.png"
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useHistory } from "react-router";


const Created = () => {
   const {handleClickFalse} = useContext(GlobalStateContext)
   const history = useHistory()


    return(
        <DivCreated>
            <h3>Compartilhe suas ideias ou dúvidas com os autores!</h3>
                <ul>
                    <li className="fundo-png">
                        <img src={plant}/>
                       <div>
                        <img src={hands2}/>
                        <img src={hands}/>
                       </div>
                    </li>
                    <li className="fundo-png">                      
                        <QuestionAnswerRoundedIcon fontSize="large"/>
                    </li>
                    <li className="fundo-png">
                        <LightbulbRoundedIcon fontSize="small"/>
                        <div id="people-icon">
                        <img src={head}/>
                        <img src={head}/>
                        </div>
                        <div id="corp-people">
                        <img src={corp}/>
                        <img src={corp}/>
                        </div>
                    </li>
                </ul>
            <p>Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</p>
            <button onClick={handleClickFalse}>
                <AddRoundedIcon fontSize="large"/>
                criar tópico
            </button>
        </DivCreated>

    )
}

export default Created;