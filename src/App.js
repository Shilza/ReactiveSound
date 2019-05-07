import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {routes} from "./routes";
import {Route, Switch} from "react-router";
import {NoMatch} from "./features/common/";
import {SongBar} from './features/common/organisms';

const App = () => (
    <Router>
        <Switch>
            {
                routes.map(
                    ({exact, path, component}) =>
                        <Route key={path} exact={exact} path={path} component={component}/>
                )
            }
            <Route component={NoMatch}/>
        </Switch>
        <SongBar/>
    </Router>
);

export default App;
