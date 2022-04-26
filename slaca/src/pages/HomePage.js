import Header from "../components/Header";
import { DivHome } from "../styled/HomePage-styled";
import NavBar from "../components/NavBar"
import VideoPage from "../components/VideoPage";

const HomePage = () => {
    return(
        <DivHome>
            <div>
                <NavBar/>
            </div>
            <div>
                <Header/>
                <VideoPage/>
            </div>
            
            
        </DivHome>
    )
}

export default HomePage;