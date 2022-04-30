import Header from "../components/Header";
import { DivHome } from "../styled/HomePage-styled";
import NavBar from "../components/NavBar"
import VideoPage from "../components/VideoPage";
import Text from "../components/Text"
import CreateTopic from "../components/CreateTopic";
import Footer from "../components/Footer";
import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import ChangeState from "../components/ChangeState";

const HomePage = () => {
    const { initialState } = useContext(GlobalStateContext)

    return (
        <DivHome>
            <div>
                <NavBar />
            </div>
            <div>
                <Header />
                <VideoPage />
                <Text />
                {initialState ? (<CreateTopic />) : (<ChangeState />)}
                <Footer />
            </div>
        </DivHome>
    )
}

export default HomePage;