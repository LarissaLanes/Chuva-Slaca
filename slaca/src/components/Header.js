import { DivHeader } from "../styled/Header-styled";
import Avatar from '@mui/material/Avatar';
import ComboBox from "./bootstratp/Autocomplete";
import avatar from "../assets/avatar.jpeg"
import two from "../assets/2two.png"
import circle from "../assets/basiccircle.png"

const Header = () => {
    return (
        <DivHeader>
            {/* <main>
                <p>Anais do Simpósio Latino Americano de Ciências de Alimentos </p>
                <p id="text-header">Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </p>
                <p>ISSN: 1234-5678</p>
            </main>
            <div>
                <ComboBox />
            </div>
            <section>
                <div>
                    <p id="text-hello">Bem vindo!</p>
                    <p>alguem12@galoascience.com</p>
                </div>
                <div>
                    <Avatar alt="Pessoa" id="avatar-header" fullWidth src={avatar} />
                    <img src={circle} id="circle"/>
                    <img src={two} id="two"/>
                </div>

            </section> */}
        </DivHeader>
    )
}

export default Header;