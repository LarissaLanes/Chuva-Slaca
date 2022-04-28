import { DivHeader } from "../styled/Header-styled";
import Avatar from '@mui/material/Avatar';
import ComboBox from "./bootstratp/Autocomplete";
import avatar from "../assets/avatar.jpeg"

const Header = () => {
    return(
        <DivHeader>
            <main>
                <p>Anais do Simpósio Latino Americano de Ciências de Alimentos </p>
                <h3>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </h3>
                <p>ISSN: 1234-5678</p>
            </main>
            <div>
                <ComboBox/>
            </div>
            <section>
                <div>
                <h4>Bem vindo!</h4>
                <p>alguem12@galoascience.com</p>
                </div>
               <div> 
                <Avatar alt="Pessoa" src={avatar}/> 
                </div>

            </section>
            
        </DivHeader>
    )
}

export default Header;