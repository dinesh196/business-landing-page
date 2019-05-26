import React, { Component } from 'react';
import './empstats.css';

class EmpStats extends Component{
	render(){
		let emps = [
					{
						"id":1,
						"name":"Dakota Rice",
						"salary":"$36,738",
						"country":"Niger"
					},
					{
						"id":2,
						"name":"Minerva Hooper",
						"salary":"$23,789",
						"country":"Curaçao"
					},
					{
						"id":3,
						"name":"Sage Rodriguez",
						"salary":"$56,142",
						"country":"Netherlands"
					},
					{
						"id":4,
						"name":"Philip Chaney",
						"salary":"$38,735",
						"country":"Korea, South"
					}
					];

		return(
			<div className="stats">
				<div className="stats-head">
					<div className="stats-head-1">Employees Stats</div>
					<div className="stats-head-2">New employees on 15th September, 2016</div>
				</div>
				<div className="stats-content">
				<Content emps={emps} />
				</div>
			</div>
			);
	}
}

function ReturnEmp(props){
	return(
		<tr>
			<td>{props.emp.id}</td>
			<td>{props.emp.name}</td>
			<td>{props.emp.salary}</td>
			<td>{props.emp.country}</td>
		</tr>
	);
}

class Content extends Component{
	render(){
		let contentEmps = this.props.emps.map(abc => <ReturnEmp emp={abc} key={abc.id}/>);
		return(
			<table cellspacing="0px">
				<tbody>
					<tr>
						<td className="row-head"> ID</td>
						<td className="row-head">Name</td>
						<td className="row-head">Salary</td>
						<td className="row-head">Country</td>
					</tr>
					{contentEmps}
				</tbody>
			</table>
		);
	}
}

export default EmpStats;