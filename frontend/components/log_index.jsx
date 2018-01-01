import React from 'react';
import { Route, Link, NavLink } from  'react-router-dom';
import { Table } from 'react-bootstrap';
import merge from 'lodash';
import LogIndexContainer from './log_form_container';

class LogIndex extends React.Component {
    constructor(props) {
      super(props);
  
      // temporarily no state
      this.renderHeader = this.renderHeader.bind(this);
    }


  componentDidMount() {
    this.props.requestAllLogs();
  }

renderHeader() {
  return (
    <tr key={`header`}>
      <td key={`food`}>Food</td>
      <td key={`fat`}>Fats (g)</td>
      <td key={`carb`}>Carbs (g)</td>
      <td key={`protein`}>Protein (g)</td>
    </tr>
  );
}

renderLogs() {
  let totalFat = 0;
  let totalCarb = 0;
  let totalProtein = 0;

  const logList = this.props.logs.map((log, idx) => {
    totalFat += log.fat;
    totalCarb += log.carb;
    totalProtein += log.protein;
    return (
      <tr key={`log-${idx}`}>
        <td key={`food-${idx}`}>{log.food}</td>
        <td key={`fat-${idx}`}>{log.fat}</td>
        <td key={`carb-${idx}`}>{log.carb}</td>
        <td key={`protein-${idx}`}>{log.protein}</td>
      </tr>
    ); 
  });   
  logList.push(
    <tr key={`log-total`}>
      <td key={`log-empty-total`}>TOTAL</td>
      <td key={`fat-total`}>{totalFat}</td>
      <td key={`carb-total`}>{totalCarb}</td>
      <td key={`protein-total`}>{totalProtein}</td>
    </tr>
  );
  return (
   logList 
  );
}

  render() {
      if (this.props.logs.length > 0) {
        return (
          <Table responsive striped bordered condensed hover>
            <tbody>
              { this.renderHeader() }
              { this.renderLogs() }
            </tbody>
          </Table>
        );
      } else {
        return null;
      }  
  }

}  

export default LogIndex;