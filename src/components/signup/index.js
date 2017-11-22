import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import SignupForm from './signup-form';

class Signup extends Component{
  render(){
    return(
      <div>
        <SignupForm />
      </div>
    );
  }
}

Signup.propTypes = {

};

export default Signup;
