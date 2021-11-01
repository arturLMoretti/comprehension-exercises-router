import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import Login from './components/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:'',
      password:''
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput({target}){
    const {name, value} = target;

    this.setState({
      [name]: value 
    })
  }

  render() {
    return (
      <>
      <BrowserRouter>
        <Link to ='/'>Home</Link>
        <Link to ='/users'>Users</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/login'>Login</Link>
        <Link to ='/strictaccess'>Strict Access</Link>
        <Switch>
          <Route 
          path = '/strictaccess'
          render={(props) => (<StrictAccess 
            {...props}
            user={this.state.user}
            password={this.state.password} />)}
          />
          <Route 
          path='/login' 
          render={(props) => (<Login {...props}
            setPassword={this.handleInput}
            setUser={this.handleInput} />)}
          />
          <Route 
            path="/users/:id"
            render={(props) => <Users {...props} greetingsMessage="Goog Morning"/>} 
          />
          <Route path="/about"><About /></Route>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      </>
      
    );
  }
}

export default App;
