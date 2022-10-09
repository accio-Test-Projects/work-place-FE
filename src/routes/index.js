import React from 'react'
import LandingPage from '../Components/LandingPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Navs() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <LandingPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default Navs
