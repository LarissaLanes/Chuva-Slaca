import Header from "../components/Header";
import { DivHome } from "../styled/HomePage-styled";
import NavBar from "../components/NavBar"

const HomePage = () => {
    return(
        <DivHome>
            <div>
                <NavBar/>
            </div>
            <div>
                <Header/>
            </div>
            
            
        </DivHome>
    )
}

export default HomePage;