import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.module.scss';
import App from './App';
import 'normalize.css';
import './styles/reset.css';
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

// let canvas = document.getElementById('canvas');
// canvas.height = data.height / 2; // 70px;
// canvas.width = data.width / 2;   // 900px
//
// let context = canvas.getContext('2d');
// context.fillStyle = '#1d1e1f';
//
// let samples = data.samples,
//     l = samples.length,
//     i = 0,
//     x = 0,
//     v;
//
// for (; i < l; i += 2, x++) {
//     v = samples[i] / 4;
//     context.fillRect(x, 0, 1, 35 - v);
//     context.fillRect(x, 35 + v, 1, 70);
// }

// text-overflow: ellipsis;
// white-space: nowrap;
// word-wrap: normal;