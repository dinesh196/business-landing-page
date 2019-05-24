import React, { Component } from 'react';
import Tasks from './tasks.js';
import EmpStats from './empstats.js';
import './container2.css';

class Container2 extends Component {
	render(){
		return(
			<div className="container2">
				<Tasks />
				<EmpStats />
			</div>
			);
	}
}

export default Container2;