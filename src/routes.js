import React from "react";
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";

import Home from './comp_ui/pages/homepage.js';
import List from './comp_ui/pages/list.js';
import Top10 from './comp_ui/pages/top10.js';
import Config from './comp_ui/pages/config.js';
import Info from './comp_ui/pages/info.js';
import Categories from './comp_ui/pages/categories.js';
import Navbar from "./comp_ui/global/navbar";
import Footer from "./comp_ui/global/footer";


function App() {
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

export default withRouter((App));
