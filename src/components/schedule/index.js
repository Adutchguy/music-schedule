import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './schedule.css';

class Schedule extends React.Component {


  render() {
    return(
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div>
              Schedule
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Schedule;
