import React from 'react';
import { Route, Link, NavLink } from  'react-router-dom';
import { Grid, Form, FormControl, Button, Col, Row } from 'react-bootstrap';
import merge from 'lodash';

const initialState = {
  food: "",
  carb: 0,
  fat: 0,
  protein: 0,
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.props.requestLogout();
  }

  handleSubmit(e) {
    e.preventDefault();
    let log = {
      food: this.state.food,
      carb: this.state.carb,
      fat: this.state.fat,
      protein: this.state.protein,
    };
    this.props.requestCreateLog({log :log })
      .then(this.setState(initialState));
  }

  handleChange(prop) {
    return e => this.setState({[prop]: e.currentTarget.value});
  }

  componentDidMount() {
    this.props.requestAllLogs();
  }

  render() {
    return (
    <Grid className='home-outer'> 
      {/* Row 1 */}
      <Row>
        <Col xs={0} s={0} md={11} lg={11} xl={11}/>
        <Col xs={12} s={12} md={1} lg={1} xl={1}
          style={{}}
        >
          <Button className="logout_button" onClick={ this.handleClick }>Logout</Button>
        </Col>
      </Row>

      {/* Row 2 */}
      <Row>
        <Col xs={0} s={0} md={3} lg={1} xl={1}/>
        <Col xs={12} s={12} md={4} lg={4} xl={4}>
          <Form onSubmit={ this.handleSubmit } >
            <div>
              Food: <FormControl value={ this.state.food } onChange={ this.handleChange('food') }/>
              Fats: <FormControl value={ this.state.fat } onChange={ this.handleChange('fat') } />
              Carbs: <FormControl value={ this.state.carb } onChange={ this.handleChange('carb') }/>  
              Protein: <FormControl value={ this.state.protein } onChange={ this.handleChange('protein') }/>  

              <button>Log it!</button>
            </div>
          </Form>
          
          
        </Col>
        <Col xs={0} s={0} md={7} lg={7} xl={7}/>
      </Row> 

    </Grid>
  );
}

}

export default Home;