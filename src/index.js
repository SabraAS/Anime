import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes.js';
import './comp_ui/styles/Main.scss';
import {BrowserRouter} from "react-router-dom";
import store from './comp_config/store/store'
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
