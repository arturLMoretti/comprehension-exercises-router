import React from "react";
import {Link} from 'react-router-dom'

class Login extends React.Component {
  render() {
    const {
      setUser,
      setPassword
    } = this.props;
    return ( 
    <>
      <label htmlFor = "user" >
      <input type = "text"
      name = "user"
      onChange = {
        setUser
      }/> 
      </label> 
      <label htmlFor = "password" >
      <input type = "password"
      name = "password"
      onChange = {
        setPassword
      } /> 
      </label>
      <Link to = "/strictaccess" >Login</Link>
    </>
    )
  }
}

export default Login