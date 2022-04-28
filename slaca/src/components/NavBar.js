import slacalogo from "../assets/orange-slaca.png"
import { DivBar, SlacaHeader } from "../styled/NavBar-styled";

const NavBar = () => {
    return (
        <DivBar>
            <SlacaHeader>
                <h1>SLACA 2019</h1>
            </SlacaHeader>
            <div>
                <img src={slacalogo} />
            </div>
            <div>
                <ul>
                    <li>
                        <a>Apresentação</a>
                    </li>
                    <li>
                        <a>Comitês</a>
                    </li>
                    <li>
                        <a>Autores</a>
                    </li>
                    <li>
                        <a>Eixos temáticos</a>
                    </li>
                    <li>
                        <a>Trabalhos</a>
                    </li>
                    <li>
                        <a>Contato</a>
                    </li>
                </ul>
            </div>
        </DivBar>
    )
}

export default NavBar;