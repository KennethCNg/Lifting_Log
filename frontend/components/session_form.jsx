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
    this.errors = this.errors.bind(this);
    this.header = this.header.bind(this);
    this.button = this.button.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }


guestLogin() {
    this.props.guestLogin(this.props.guest);
}

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  update(prop) {
    return e => this.setState({[prop]: e.currentTarget.value});
  }

  linkRedirects() {
    if (this.props.formType === "login") {
      return (
        <div className="session-link">
            <Link onClick={this.props.resetErrors} to="/signup"> Register </Link>
            {/* <p>or take a peek </p> */}
            {/* <div className="guest-link" onClick={this.guestLogin}> Guest Login </div> */}
        </div>
    );
  } else {
    return (
      <div className="session-link">
          <Link onClick={this.props.resetErrors} to="/login"> Login </Link>
          {/* <p>or take a peek</p> */}
          {/* <div className="guest-link" onClick={this.guestLogin}> Guest Login </div> */}
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
      <ul className="session-errors">
        { errorList }
      </ul>
      );
  }
}


header() {
if (this.props.formType === 'login') {
  return (
    <h1>WELCOME BACK.</h1>
  );
} else {
    return (
      <h1>CREATE AN ACCOUNT</h1>
    );
}
}

button() {
if (this.props.formType === 'login') {
  return (
    <Button>Login</Button>
  );
} else {
    return (
      <Button>Continue</Button>
    );
}
}

render() {
  return (
    <div className="auth-outer">
      <Grid>
      {/* Row 1 */}
      <Row className="session-header-filler" />
      
      {/* Row 2 */}
      <Row inline="true">
        <Col xs={0} s={0} md={11} lg={11} xl={11}/>
        <Col xs={0} s={0} md={11} lg={11} xl={11}/>
        <Col xs={12} s={12} md={1} lg={1} xl={1}>
          {this.linkRedirects()}
        </Col>
      </Row>
      
      {/* Row 3 */}
      <Row inline="true">
        <Col xs={12} s={12} md={3} lg={3} xl={3}/>
        <Col xs={12} s={12} md={6} lg={6} xl={6} className="auth-outer">
          <div className="form-outer">
            <Form onSubmit={ this.handleSubmit }>
              {this.header()}
              <div>
                <div>
                  <label>
                    USERNAME
                  </label>
                  <div>
                    <FormControl required type='text'
                      value={ this.state.username }
                      onChange={this.update('username')} />
                    </div>
                  </div>
                  <br/>
                  <div>
                    <label>
                      PASSWORD
                    </label>
                  </div>
                  <div>
                    <FormControl required type='password'
                      value={ this.state.password }
                      onChange={this.update('password')} />
                </div>
              </div>

              {this.errors()}
              {this.button()}
            </Form>
          </div>
        </Col>
        <Col xs={12} s={12} md={3} lg={3} xl={3}/>
      </Row>
      </Grid>
    </div>
  );
  }

}

export default withRouter(SessionForm);