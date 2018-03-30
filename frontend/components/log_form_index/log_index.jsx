import React from 'react';
import { Route, Link, NavLink } from  'react-router-dom';
import { Table } from 'react-bootstrap';
import merge from 'lodash';
import LogIndexContainer from '../log_form/log_form_container';


const LogIndex = (props) => {

  const renderHeader = () => {
    return (
      <thead>
        <tr key={`header`}>
          <th key={`food`} className='header-td'>Food</th>
          <th key={`fat`} className='header-td'>Fats (g)</th>
          <th key={`carb`} className='header-td'>Carbs (g)</th>
          <th key={`protein`} className='header-td'>Protein (g)</th>
          <th key={`calories`} className='header-td'>Calories</th>
        </tr>
      </thead>
    );
  };

  const renderLogs = () => {
    let totalFat = 0;
    let totalCarb = 0;
    let totalProtein = 0;
    let totalCalories = 0;

    const logList = props.logs.map((log, idx) => {
      totalFat += log.fat;
      totalCarb += log.carb;
      totalProtein += log.protein;
      totalCalories += log.fat + log.carb + log.protein;
      return (
        <tbody>
          <tr key={`log-${idx}`}>
            <td key={`food-${idx}`}>{log.food}</td>
            <td key={`fat-${idx}`}>{log.fat}</td>
            <td key={`carb-${idx}`}>{log.carb}</td>
            <td key={`protein-${idx}`}>{log.protein}</td>
            <td key={`calories-${idx}`}>{log.fat + log.carb + log.protein}</td>
          </tr>
        </tbody>
      ); 
    });   
    logList.push(
      <tbody>
        <tr key={`log-total`}>
          <td key={`log-empty-total`}>TOTAL</td>
          <td key={`fat-total`}>{totalFat}</td>
          <td key={`carb-total`}>{totalCarb}</td>
          <td key={`protein-total`}>{totalProtein}</td>
          <td key={`calorie-total`}>{totalCalories}</td>
        </tr>
      </tbody>
    );
    return (
      logList 
    );
  };

  if (props.logs.length > 0) {
    return (
      <Table responsive striped bordered condensed hover className='table'>
        { renderHeader() }
        { renderLogs() }
      </Table>
    );
    } else {
        return null;
    }
};
