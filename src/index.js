import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.module.scss';
import App from './App';
import 'normalize.css';
import './styles/reset.css';
import '../node_modules/aos/dist/aos.css';
import store from './store';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import SC from "soundcloud";

// Initialize SoundCloud API
SC.initialize({
    client_id: 'a0f84e7c2d612d845125fb5eebff5b37'
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();