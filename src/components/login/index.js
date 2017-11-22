import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from './login-form';

class Login extends Component{
  render(){
    return(
      <div>
        <LoginForm />
      </div>
    );
  }
}

Login.propTypes = {

};

export default Login;
