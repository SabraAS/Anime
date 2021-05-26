import React, {useState} from "react";
import {
    Switch,
    Route
} from "react-router-dom";

import Home from './pages/homepage.js';
import List from './pages/list.js';
import Top10 from './pages/top10.js';
import Config from './pages/config.js';
import Info from './pages/info.js';
import Categories from './pages/categories.js';
import Navbar from "./global/navbar";
import Footer from "./global/footer";


export default function App() {
    return (
        <div className="app">
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/list" component={List}/>
                <Route exact path="/top10" component={Top10}/>
                <Route exact path="/config" component={Config}/>
                <Route exact path="/info" component={Info}/>
                <Route exact path="/categories" component={Categories}/>
            </Switch>
            <Footer/>
        </div>
    );
}
