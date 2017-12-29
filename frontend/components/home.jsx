import React from 'react';
import { Route, Link, NavLink } from  'react-router-dom';

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
    <div> 
        <button className="logout_button" onClick={ this.handleClick }>Logout</button>
    </div>
  
);
}

}

export default Home;