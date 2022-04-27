import {DivFooter} from "../styled/Footer-styled"
import logoGaloa from "../assets/galoá-logo.png"

const Footer = () => {
    return(
        <DivFooter>
            <div>
            <img src={logoGaloa}/>
                <button>Saiba mais</button>
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