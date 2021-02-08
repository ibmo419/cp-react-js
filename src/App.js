import './App.css';
import React, {Component} from 'react';
import {Button, Form, FormGroup, label, input}
from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
class App extends Component {
  render() {
  return (
    <Form className="App">
    <h1>
      <span className="font-weight-bold">MyForm</span>.com
    </h1>
    <h2 className="text-center">Welcome</h2>
    <FormGroup className="display">
      <label >Email</label>
      <input type="email" placeholder="write your Email" />
    </FormGroup>
    <FormGroup className="display">
      <label>Password</label>
      <input type="password" placeholder="write your Password" />
    </FormGroup>
    <Button className="btn-lg btn-dark btn-block">
      Log In
    </Button>
    <div className="text-center pt-3">Or You can continue with your Facebook account</div>
    <FacebookLoginButton className="mt-3 mb-3"/>
    <div className="text-center">
    <a href="/sign-up">Sign up</a>
    <span className="p-2">|</span>
    <a href="/Forget password">Forgot password</a>
    </div>
    </Form>
    
  );
}

}

export default App;
