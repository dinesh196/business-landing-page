import React, { Component } from 'react';
import TESTS from './test1.js';
import './container1.css';





class CONTAINER1 extends Component
 {
   
  render() {
    return (
            <div className="container1">
            <TESTS dataheader="Daily Sales" databody=" increase 55% in todays sale" datafooter="Updated 4 min ago" datafooticon="fas fa-clock" bgcolor="green"  i="graph"/>
            <TESTS dataheader="Daily Sales" da tabody=" Last campaign performance" datafooter="Campaign sent 2 days ago" datafooticon="fas fa-clock" bgcolor="orange" i="graph2" />
            <TESTS dataheader="Email Subscription"  databody=" Last campaign performance" datafooter="campaign sent 4 days ago" datafooticon="fas fa-clock"  i="graph3" />
            </div>
          );
          }
}

export default CONTAINER1;
