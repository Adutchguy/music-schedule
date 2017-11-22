import './signup-form.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {Form,FormGroup,FormControl,ControlLabel,Col,Checkbox,Button,PageHeader} from 'react-bootstrap';

class SignupForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  passwordValidation() {
    let pwd = this.state.password;
    let psswd = /^(?=.*[0-9])(?=.*[!@#+=$%^&*])[a-zA-Z0-9!@#$+=%^&*]{6,16}$/;
    let validation = psswd.test(pwd);
    if(pwd.length > 0){
      if(validation){
        return 'success';
      }
      else {
        return 'error';
      }
    } else{
      return null;
    }
  }

  handleChange(e){
    e.target.type === 'checkbox' ?
      this.setState({checked: e.target.checked}) :
      this.setState({[e.target.type]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit} className='signup-form' horizontal>
        <PageHeader className='signup-form-header'> SIGNUP </PageHeader>
        <FormGroup
          controlId='signup-form-email'
        >
          <Col componentClass={ControlLabel} sm={2} md={2} lg={2}>
            Email
          </Col>

          <Col sm={10} md={10} lg={10}>
            <FormControl
              type='email'
              placeholder='EMAIL'
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </Col>
        </FormGroup>

        <FormGroup
          validationState={this.passwordValidation()}
          controlId='signup-form-password'
        >
          <Col componentClass={ControlLabel} sm={2} md={2} lg={2}>
            Password
          </Col>

          <Col sm={10} md={10} lg={10}>
            <FormControl
              type='password'
              placeholder='PASSWORD'
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </Col>
        </FormGroup>

        <FormGroup
          controlId='signup-form-checkbox'
        >
          <Col smOffset={2} sm={10}>
            <Checkbox
              type='checkbox'
              checked={this.state.checked}
              onChange={this.handleChange}
            > Remember me
            </Checkbox>
          </Col>
        </FormGroup>

        <FormGroup
          controlId='signup-form-submit'
        >
          <Col smOffset={2} sm={10}>
            <Button type='submit'>
              LOGIN
            </Button>
          </Col>
        </FormGroup>

      </Form>
    );
  }
}

SignupForm.propTypes = {

};

export default SignupForm;
