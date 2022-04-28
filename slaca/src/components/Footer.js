import {DivFooter} from "../styled/Footer-styled"
import logoGaloa from "../assets/logo-galoá.svg"
import { useContext } from "react"
import GlobalStateContext from "../global/GlobalStateContext"

const Footer = () => {

    
    return(
        <DivFooter id="contact">
            <div>
            <img src={logoGaloa}/>
                <button href="">Saiba mais</button>
            </div>
                
            <section>
                <p>
                <h5>Preservar a memória e ampliar o acesso ao conhecimento científico </h5> 
                gerado em eventos é a razão de ser da plaforma Galoá Proceedings.
                </p>
                <p>
                Os trabalhos publicados aqui têm maior alcance e ficam disponível para todo a comunidade científica, mantendo aceso o debate científico fomentado
                pelos encontros e aumentando o impacto do evento.
                </p>             
            </section>
        </DivFooter>
    )
}

export default Footer;