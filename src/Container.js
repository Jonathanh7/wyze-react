import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Random from "./components/Random";
import Search from "./components/Search";
import aboutUs from "./components/aboutUs";
import App from "./App";

export default function Container() {
  return (
    <div className="Contain">
      <Switch>
      <Route path="/" exact />  
      <Route path="/random" component={Random} />
      <Route path="/search" component={Search} /> 
      <Route path="/about" component={aboutUs} />
        </Switch>
  
    </div>
  );
}
