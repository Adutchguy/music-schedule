import React from 'react';
import {Grid,Row,Col,PageHeader} from 'react-bootstrap';
import './song-stats.css';

class SongStats extends React.Component {


  render() {
    return(
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <PageHeader className='song-stats-header'> SONG STATS </PageHeader>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SongStats;
