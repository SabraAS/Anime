import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes.js';
import './comp_ui/styles/Main.scss';
import {BrowserRouter} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./comp_ui/store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
