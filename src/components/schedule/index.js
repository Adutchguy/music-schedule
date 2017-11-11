import React from 'react';
import {Grid,Row,Col,PageHeader} from 'react-bootstrap';
import './schedule.css';

class Schedule extends React.Component {


  render() {
    return(
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <PageHeader className='schedule-header'> SCHEDULE </PageHeader>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Schedule;
