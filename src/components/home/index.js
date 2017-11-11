import React, { Component } from 'react';
import {Grid,Row,Col,PageHeader} from 'react-bootstrap';
import './home.css';



class Home extends Component {

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <PageHeader className='home-header'> WELCOME </PageHeader>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h3 className='home-header'> IBCF Music Scheduling App </h3>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
