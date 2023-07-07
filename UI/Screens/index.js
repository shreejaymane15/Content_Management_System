import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../Screens/Login.js"
import Topic from "./Topic.js";
import ProtectedRoute from "./ProtectedRoute.js";
import { Switch } from "react-router-dom";

function Controller(){
    return(<Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    {/* <Route exact path="/topics" component={Topic}/> */}
                    <ProtectedRoute exact path="/topics" component={Topic}></ProtectedRoute> 
                    {/* <ProtectedRoute exact path="/topics" component={Topic}></ProtectedRoute> 
                    <ProtectedRoute exact path="/topics" component={Topic}></ProtectedRoute> 
                     */}
                </Switch>
            </Router>)
}

export default Controller;