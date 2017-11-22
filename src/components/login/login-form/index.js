import './login-form.css';
// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Form,FormGroup,FormControl,ControlLabel,Col,Checkbox,Button,PageHeader} from 'react-bootstrap';

class LoginForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <Form onSubmit={this.handleSubmit} className='login-form' horizontal>
        <PageHeader className='login-form-header'> LOGIN </PageHeader>
        <FormGroup
          controlId='login-form-email'
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
          </Col>
        </FormGroup>

        <FormGroup
          controlId='login-form-password'
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
          </Col>
        </FormGroup>

        <FormGroup
          controlId='login-form-checkbox'
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
          controlId='login-form-submit'
        >
          <Col smOffset={2} sm={10}>
            <Button type='submit'>
              LOGIN
            </Button>
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
