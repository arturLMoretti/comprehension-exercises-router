import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/about"><About /></Route>
      </BrowserRouter>
      
    );
  }
}

export default App;
