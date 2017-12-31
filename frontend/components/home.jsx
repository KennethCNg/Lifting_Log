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

  renderLogs() {
    
  }

  render() {
    return (
    <div className='home-outer'> 
      <button className="logout_button" onClick={ this.handleClick }>Logout</button>

    </div>
  );
}

}

export default Home;