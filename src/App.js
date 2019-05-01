import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {routes} from "./routes";
import {Route, Switch} from "react-router";
import {NoMatch} from "./features/common/";

const App = () => (
    <Router>
        <Switch>
            {
                routes.map(
                    ({exact, path, component}, index) =>
                    <Route key={index} exact={exact} path={path} component={component}/>
                )
            }
            <Route component={NoMatch}/>
        </Switch>
    </Router>
);

export default App;
