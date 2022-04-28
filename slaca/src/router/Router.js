import {BrowserRouter, Switch, Route} from "react-router-dom"
import NewTopic from "../components/componentsOfCreateATopic/NewTopic";
import PostQuestion from "../components/componentsOfCreateATopic/PostQuestion";
import HomePage from "../pages/HomePage"

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/">
                    <HomePage/>
                </Route>
              
            </Switch>
        </BrowserRouter>
    )
}

export default Router;