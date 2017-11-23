import './signup-form.css';
// import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {passwordHashCreate} from '../../../lib/pass.js';
import {Form,FormGroup,FormControl,ControlLabel,Col,Button,PageHeader,Tooltip,Overlay} from 'react-bootstrap';


class SignupForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      tempPass:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
    this.usernameValidation = this.usernameValidation.bind(this);
    this.lastNameValidation = this.lastNameValidation.bind(this);
    this.firstNameValidation = this.firstNameValidation.bind(this);
  }

  componentDidUpdate(){
    console.log('-----------STATE----------',this.state);
  }


  // HANDLE EVENTS
  handleChange(e){
    e.target.name === 'checkbox' ?
      this.setState({[e.target.name]: e.target.checked}) :
      e.target.name === 'tempPass' ? this.setState({
        tempPass: e.target.value,
        password: passwordHashCreate(e.target.value),
      }) :
        this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    delete this.state.tempPass;
    // TODO: insert logic for sending data
    console.log('submitted state:\n',this.state);
    this.setState({
      username: '',
      email: '',
      tempPass: '',
      firstName: '',
      lastName: '',
      password: '',
    });
  }




  // VALIDATION FUNCTIONS
  usernameValidation(){
    let length = this.state.username.length;
    if(length > 0){
      if(length >= 6){
        return 'success';
      } else{
        return 'error';
      }
    } else{
      return null;
    }
  }

  emailValidation(){
    let email = this.state.email;
    let length = email.length;

    if(length > 0){
      if(email.includes('@') && email.includes('.')){
        return 'success';
      }else {
        return 'error';
      }
    }else {
      return null;
    }
  }

  firstNameValidation(){
    let length = this.state.firstName.length;
    if(length > 0) {
      if(length > 2){
        return 'success';
      }else {
        return 'error';
      }
    } else {
      return null;
    }
  }

  lastNameValidation(){
    let length = this.state.lastName.length;
    if(length > 0) {
      if(length > 2){
        return 'success';
      }else {
        return 'error';
      }
    } else {
      return null;
    }
  }

  passwordValidation() {
    let pwd = this.state.tempPass;
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





  // RENDER COMPONENT
  render(){
    return(
      <Form onSubmit={this.handleSubmit} className='signup-form' horizontal>
        <PageHeader className='signup-form-header'> SIGNUP </PageHeader>


        <FormGroup
          validationState={this.usernameValidation()}
          controlId='signup-form-username'
        >
          <Col componentClass={ControlLabel} sm={2} md={2} lg={2}>
            * Username:
          </Col>

          <Col sm={10}>
            <FormControl
              value={this.state.username}
              ref='usernameForm'
              name='username'
              type='text'
              placeholder='USERNAME'
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
            * Password:
          </Col>

          <Col sm={10}>
            <FormControl
              value={this.state.tempPass}
              ref='passwordForm'
              name='tempPass'
              type='password'
              placeholder='PASSWORD'
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </Col>
        </FormGroup>



        <FormGroup
          validationState={this.emailValidation()}
          controlId='signup-form-email'
        >
          <Col componentClass={ControlLabel} sm={2} md={2} lg={2}>
            * Email:
          </Col>

          <Col sm={10}>
            <FormControl
              value={this.state.email}
              ref='emailForm'
              name='email'
              type='email'
              placeholder='EMAIL'
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </Col>
        </FormGroup>



        <FormGroup
          validationState={this.firstNameValidation()}
          controlId='signup-form-firstname'
        >
          <Col componentClass={ControlLabel} sm={2} md={2} lg={2}>
            * First Name:
          </Col>

          <Col sm={10}>
            <FormControl
              value={this.state.firstName}
              ref='firstnameForm'
              name='firstName'
              type='text'
              placeholder='First Name'
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </Col>
        </FormGroup>



        <FormGroup
          validationState={this.lastNameValidation()}
          controlId='signup-form-lastname'
        >
          <Col componentClass={ControlLabel} sm={2} md={2} lg={2}>
            * Last Name:
          </Col>

          <Col sm={10}>
            <FormControl
              value={this.state.lastName}
              ref='lastnameForm'
              name='lastName'
              type='text'
              placeholder='Last Name'
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </Col>
        </FormGroup>


        <FormGroup
          controlId='signup-form-submit'
        >
          <Col smOffset={2} sm={10}>
            <Button type='submit'>
              SIGNUP
            </Button>
            <FormControl.Static>
              * Required
            </FormControl.Static>
          </Col>
        </FormGroup>


        {/*OVERLAYS FOR FORM FIELD VALIDATIONS. TARGETED VIA REF PROP*/}
        <Overlay target={() => ReactDOM.findDOMNode(this.refs.usernameForm)} show={this.usernameValidation() === 'error'} animation placement='top'>
          <Tooltip id='Username must be at least 6 characters long'>
            Username must be at least 6 characters long
          </Tooltip>
        </Overlay>

        <Overlay target={() => ReactDOM.findDOMNode(this.refs.emailForm)} show={this.emailValidation() === 'error'} animation placement='top'>
          <Tooltip id='Please enter a valid email (e.g. john@smith.com)'>
            Please enter a valid email (e.g. john@smith.com)
          </Tooltip>
        </Overlay>

        <Overlay target={() => ReactDOM.findDOMNode(this.refs.passwordForm)} show={this.passwordValidation() === 'error'} animation placement='top'>
          <Tooltip id='Password must contain 1 lower and upper case letter, 1 number, and 1 special character'>
            Password must be 6 characters long, contain 1 lower and upper case letter, 1 number, and 1 special character
          </Tooltip>
        </Overlay>

        <Overlay target={() => ReactDOM.findDOMNode(this.refs.firstnameForm)} show={this.firstNameValidation() === 'error'} animation placement='top'>
          <Tooltip id='First Name must be at least 3 characters'>
            First name must be at least 3 characters
          </Tooltip>
        </Overlay>

        <Overlay target={() => ReactDOM.findDOMNode(this.refs.lastnameForm)} show={this.lastNameValidation() === 'error'} animation placement='top'>
          <Tooltip id='Last Name must be at least 3 characters'>
            Last name must be at least 3 characters
          </Tooltip>
        </Overlay>
      </Form>
    );
  }
}

SignupForm.propTypes = {

};

export default SignupForm;
