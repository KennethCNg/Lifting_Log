import React from 'react';
import { Route, Link, NavLink } from  'react-router-dom';
import { Grid, Form, FormControl, Button, Col, Row } from 'react-bootstrap';
import merge from 'lodash';
import LogIndexContainer from './log_form_container';

class LogIndex extends React.Component {
    constructor(props) {
      super(props);
  
      // temporarily no state
    }


  componentDidMount() {
    this.props.requestAllLogs();
  }

    render() {
        if (this.props.logs.length > 0) {
          let totalFat = 0;
          let totalCarb = 0;
          let totalProtein = 0;
          const logList = this.props.logs.map((log, idx) => {
            totalFat += log.fat;
            totalCarb += log.carb;
            totalProtein += log.protein;
            return (
              <li key={`log-${idx}`}>
                Food: {log.food}
                Carb: {log.carb}
                Fat: {log.fat}
                Protein: {log.protein}
              </li>
            );
          });
          return (
            <div>
              <ul>
                { logList }
              </ul>
              <div>
                Fat: { totalFat }
                Carb: { totalCarb }
                Protein: { totalProtein }
              </div>
            </div>
          );
        } else {
          return null;
        }
      }
}  

export default LogIndex;