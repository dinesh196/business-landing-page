import React, { Component } from 'react';
import './empstats.css';

class EmpStats extends Component{
	render(){
		return(
			<div className="stats">
				<div className="stats-head">
					<div className="stats-head-1">Employees Stats</div>
					<div className="stats-head-2">New employees on 15th September, 2016</div>
				</div>
				<div className="stats-content">
				</div>
			</div>
			);
	}
}

export default EmpStats;