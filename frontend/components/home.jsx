import React from 'react';
import { Route, Link, NavLink } from  'react-router-dom';
import { Grid, Form, FormControl, Button, Col, Row } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.requestLogout();
  }

  render() {
    return (
    <div className='home-outer'> 
      <Grid>
        {/* Row 1 */}
        <Row>
          <Col xs={0} s={0} md={11} lg={11} xl={11}/>
          <Col xs={12} s={12} md={1} lg={1} xl={1}>
            <button className="logout_button" onClick={ this.handleClick }>Logout</button>
          </Col>
        </Row>

        {/* Row 2 */}
        <Row>
          <Col xs={12} s={12} md={6} lg={6} xl={6}>
            
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

}

export default Home;