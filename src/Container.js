import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Random from "./components/Random";
import Search from "./components/Search";
import aboutUs from "./components/aboutUs";

export default class Container extends React.Component  {
  constructor() {
    super();
    this.state = {
      wisedom: undefined
    }
  }
  

  render() {
    return (
      <div className="Contain">
        <Switch>
          <Route path="/" exact />
          <Route path="/random" render={() => <Random/>
          } />
          <Route path="/search" component={Search} />
          <Route path="/about" component={aboutUs} />
        </Switch>
  
      </div>
    );
  }
}
