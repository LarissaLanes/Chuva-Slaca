import { DivHeader } from "../styled/Header-styled";
import Avatar from '@mui/material/Avatar';
import ComboBox from "./bootstratp/Autocomplete";

const Header = () => {
    return(
        <DivHeader>
            <div>
                <p>Anais do Simpósio Latino Americano de Ciências de Alimentos </p>
                <p>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </p>
                <p>ISSN: 1234-5678</p>
            </div>
            <div>
                <ComboBox/>
            </div>
            <div>
                <p>
                    Bem vindo!
                </p>
                <p>
                    alguem12@galoascience.com
                </p>
                <Avatar alt="Pessoa" src="../assets/avatar.jpeg" />
            </div>
            
        </DivHeader>
    )
}

export default Header;