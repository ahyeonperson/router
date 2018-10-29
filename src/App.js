import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch> //for undisplaying {Error} to every pages
            <Route path="/" component={Home} exact />
            //exact :  witout exact, /about, /contact also displaying Home
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>  
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
