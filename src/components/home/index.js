import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './home.css';



class Home extends Component {

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h3 className='home-header'> IBCF Music Scheduling App </h3>
            <h4>
              Thank you for logging in! Please select a view from the dropdown menu.
            </h4>
          </Col>
        </Row>

        <Row>

        </Row>
      </Grid>
    );
  }
}

export default Home;
