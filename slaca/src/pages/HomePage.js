import Header from "../components/Header";
import { DivHome } from "../styled/HomePage-styled";
import NavBar from "../components/NavBar"
import VideoPage from "../components/VideoPage";
import Text from "../components/Text"
import CreateTopic from "../components/CreateTopic";

const HomePage = () => {
    return(
        <DivHome>
            <div>
                <NavBar/>
            </div>
            <div>
                <Header/>
                <VideoPage/>
                <Text/>
                <CreateTopic/>
            </div>
            
            
        </DivHome>
    )
}

export default HomePage;