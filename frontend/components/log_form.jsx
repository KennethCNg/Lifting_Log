import React from 'react';
import { Route, Link, NavLink } from  'react-router-dom';
import { Form, FormControl } from 'react-bootstrap';
import merge from 'lodash';

const initialState = {
  food: "",
  carb: "",
  fat: "",
  protein: "",
};

class LogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <Form onSubmit={ this.handleSubmit }>
        <div>
          <FormControl value={ this.state.food } onChange={ this.handleChange('food') } placeholder="Food"/>
          <br />
          <FormControl value={ this.state.fat } onChange={ this.handleChange('fat') } placeholder="Fats (g)"/>
          <br />
          <FormControl value={ this.state.carb } onChange={ this.handleChange('carb') } placeholder="Carbs (g)"/>  
          <br />
          <FormControl value={ this.state.protein } onChange={ this.handleChange('protein') } placeholder="Protein (g)"/>  
          <br />
          <button>Log it!</button>
        </div>
      </Form>
    );
  }

}

export default LogForm;