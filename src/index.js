import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes.js';
import './styles/Main.scss';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
  document.getElementById('root')
);
