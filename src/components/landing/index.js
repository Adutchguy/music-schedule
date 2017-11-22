import React, { Component } from 'react';
import {Grid,Row,Col,PageHeader} from 'react-bootstrap';
import './landing.css';



class Landing extends Component {

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <PageHeader className='landing-header'> WELCOME </PageHeader>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h3 className='landing-header'> IBCF Music Scheduling App </h3>
            <h4> Please Login To Manage Your<br/> Schedule and Availability </h4>
          </Col>
        </Row>

        <Row>

        </Row>
      </Grid>
    );
  }
}

export default Landing;
