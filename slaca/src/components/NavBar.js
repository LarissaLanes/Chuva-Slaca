import slacalogo from "../assets/orange-slaca.png"
import { DivBar, SlacaHeader } from "../styled/NavBar-styled";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import "../styled/style.css"

const NavBar = () => {
    return (
        <div className="Nav-Bar">
            <input type="checkbox" id="check" />
            <label for="check">
                <MenuRoundedIcon />
            </label>
            <DivBar className="nav">
                <SlacaHeader>
                    <h1>SLACA 2019</h1>
                </SlacaHeader>
                <div>
                    <img src={slacalogo} />
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#presentation">Apresentação</a>
                        </li>
                        <li>
                            <a href="#committee">Comitês</a>
                        </li>
                        <li>
                            <a href="#authors">Autores</a>
                        </li>
                        <li>
                            <a href="#theme">Eixos temáticos</a>
                        </li>
                        <li>
                            <a href="#works">Trabalhos</a>
                        </li>
                        <li>
                            <a href="#contact">Contato</a>
                        </li>
                    </ul>
                </div>
            </DivBar>
        </div>
    )
}

export default NavBar;