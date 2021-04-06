import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from '../src/markup/pages/index'
import Products from '../src/markup/pages/product-list'
import Products_single from '../src/markup/pages/product-detail'
import About from '../src/markup/pages/index'
import Contact from '../src/markup/pages/index'
import './App.css';

function App() {
  return (
    <Router basename={'/dalaltiles'}>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Index} />
        <Route exact path="/product-list" component={Products} />
        <Route  path="/products-detail" component={Products_single} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
