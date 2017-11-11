import React from 'react';
import {Grid,Row,Col,PageHeader} from 'react-bootstrap';
import './song-log.css';

class SongLog extends React.Component {


  render() {
    return(
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <PageHeader className='song-log-header'> SONG LOG </PageHeader>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SongLog;
