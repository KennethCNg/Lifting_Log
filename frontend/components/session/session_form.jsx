import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Grid, Form, FormControl, Button, Col, Row } from 'react-bootstrap';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.linkRedirects = this.linkRedirects.bind(this);
    this.button = this.button.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  guestLogin() {
    this.props.guestLogin(this.props.guest);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
    this.props.resetErrors();
  }

  handleChange(prop) {
    return e => this.setState({[prop]: e.currentTarget.value});
  }

  handleHistory() {
    let url = this.props.location.pathname === "/login" ? "/signup" : "/login";
    this.props.history.push(url);
  }

  handleClick(e) {    
    this.handleHistory();
    this.props.resetErrors();
  }

  linkRedirects() {
    if (this.props.formType === "login") {
      return (
        <div 
          className="auth-link-signup-div" 
          onClick={ this.handleClick }
          style={{ textDecoration: 'none', color: "white" }} 
          >Sign up
        </div>
    );
  } else {
    return (
      <div 
        className="auth-link-login-div"
        onClick={ this.handleClick }
        style={{ textDecoration: 'none', color: "white" }} 
        >Log in
      </div>
    );
  }
}

errors() {
  if (this.props.errors) {
    const errorList = this.props.errors.map((error, idx) => {
      return (
        <li key={`error-${idx}`}>
          { error }
        </li>
      );
    });
    return (
      <ul className="auth-errors">
        { errorList }
      </ul>
      );
  }
}

button() {
  return (
    <button className='auth-button'>{this.props.formType === 'login' ? "Log in" : "Sign up"}</button>
  );
}

render() {
  return (
    <div className="auth-outer">
      <Grid>
        
      {/* Row 1 */}
      <Row inline="true" className='row-1'>
        <Col xs={0} s={0} md={11} lg={11} xl={11}/>
        <Col xs={12} s={12} md={1} lg={1} xl={1}>
          {this.linkRedirects()}
        </Col>
      </Row>

      {/* Row 2 */}
      <Row className='row-2'>
        <div className='header'>
        Macro4Me
        </div>
      </Row>

      {/* Row 3 */}
      <Row inline="true" className='row-3'>
        <Col xs={12} s={12} md={3} lg={3} xl={3} />
        <Col xs={12} s={12} md={6} lg={6} xl={6} className="auth-outer">
          <div className="form-outer">
            <Form onSubmit={ this.handleSubmit }>
              <div>
                <div>
                  <FormControl required type='text'
                    value={ this.state.username }
                    onChange={this.handleChange('username')} 
                    placeholder='Username'
                    className='form-control input-lg'
                    style={{ borderRadius: "4px 4px 0px 0px" }} 
                  />
                </div>
                <div className='password-wrapper'>
                  <FormControl required type='password'
                    value={ this.state.password }
                    onChange={this.handleChange('password')} 
                    placeholder='Password'
                    className='form-control input-lg'
                    style={{ borderRadius: "0px 0px 4px 4px" }} 
                  />
                </div>
              </div>

              {this.errors()}
              {this.button()}
            </Form>
          </div>
        </Col>
        <Col xs={12} s={12} md={3} lg={3} xl={3} />
      </Row>

      </Grid>
    </div>
  );
  }

}

export default withRouter(SessionForm);