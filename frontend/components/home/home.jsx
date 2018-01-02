import React from 'react';
import { Route, Link, NavLink } from  'react-router-dom';
import { Grid, Form, FormControl, Button, Col, Row } from 'react-bootstrap';
import merge from 'lodash';
import LogFormContainer from '../log_form/log_form_container';
import LogIndexContainer from '../log_form_index/log_index_container';

class Home extends React.Component {
  constructor(props) {
    super(props);

    // temporarily no state

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.requestLogout();
  }

  getDate() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let today = new Date;
    return (
      <div className='home-h3'>
        {(monthNames[(today.getMonth())]).toString()} {(today.getDate().toString())}, {(today.getFullYear().toString())}
      </div>
    );
  }

  render() {
    return (
      <div className='home-outer'>
        <Grid> 

        {/* Row 1 */}
        <Row className='row-1'>
          <Col xs={0} s={0} md={11} lg={11} xl={11}/>
          <Col xs={12} s={12} md={1} lg={1} xl={1}
          >
            <Button bsStyle="danger" className="logout_button" onClick={ this.handleClick }>Logout</Button>
          </Col>
        </Row>
        
        {/* Row 2 */}
        <Row className='home-row-2'>

          <Col xs={12} s={12} md={4} lg={4} xl={4} className='log-form-home'>
            <LogFormContainer />
          </Col>
          <Col xs={0} s={0} md={1} lg={1} xl={1}/>
          <Col xs={0} s={0} md={7} lg={7} xl={7}>
            { this.getDate() }
            <LogIndexContainer />
          </Col>
        </Row> 

      </Grid>
    </div>
  );
}

}

export default Home;