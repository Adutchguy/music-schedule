import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './song-log.css';

class SongLog extends React.Component {


  render() {
    return(
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            Song Log
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SongLog;
