import './login-form.css';
// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {passwordHashCreate} from '../../../lib/pass.js';
import {Form,FormGroup,FormControl,ControlLabel,Col,Checkbox,Button,PageHeader} from 'react-bootstrap';

class LoginForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      checked: false,
      tempPass: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(){
    console.log('-----------STATE----------',this.state);
  }

  // HANDLE EVENTS
  handleChange(e){
    e.target.name === 'checked' ?
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
      password: '',
      checked: false,
      tempPass: '',
    });
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit} className='login-form' horizontal>
        <PageHeader className='login-form-header'> LOGIN </PageHeader>
        <FormGroup controlId='login-form-username'>
          <Col componentClass={ControlLabel} sm={2} md={2} lg={2}>
            Username:
          </Col>

          <Col sm={10} md={10} lg={10}>
            <FormControl
              value={this.state.username}
              name='username'
              type='text'
              placeholder='USERNAME'
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId='login-form-password'>
          <Col componentClass={ControlLabel} sm={2} md={2} lg={2}>
            Password:
          </Col>

          <Col sm={10} md={10} lg={10}>
            <FormControl
              value={this.state.tempPass}
              name='tempPass'
              type='password'
              placeholder='PASSWORD'
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId='login-form-checkbox'>
          <Col smOffset={2} sm={10}>
            <Checkbox
              name='checked'
              type='checkbox'
              checked={this.state.checked}
              onChange={this.handleChange}
            > Remember me
            </Checkbox>
          </Col>
        </FormGroup>

        <FormGroup controlId='login-form-submit'>
          <Col smOffset={2} sm={10}>
            <Button type='submit'>
              LOGIN
            </Button>
          </Col>
        </FormGroup>

        <FormGroup controlId='login-form-signup'>
          <Col smOffset={2} sm={10}>
            <LinkContainer to='/signup'>
              <a>Signup</a>
            </LinkContainer>
          </Col>
        </FormGroup>

      </Form>
    );
  }
}

LoginForm.propTypes = {

};

export default LoginForm;
