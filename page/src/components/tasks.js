import React, { Component } from 'react';
import './tasks.css';

class Tasks extends Component{
	constructor(props){
		super(props);
		this.state = {active: 'bugs'};
	}

	handleClick(e, abc){
		console.log(e);
		let tabs = document.querySelectorAll(".tab");
		tabs.forEach(tab => {tab.classList.remove('active')});
		let id = document.getElementById(abc);
		id.classList.add('active');
		let tasks = document.querySelectorAll(".task-content-item");
		tasks.forEach(task => {
			if(!(task.classList.contains(abc))) task.style.display = "none";
			else task.style.display = "flex";
		});
	}

	render(){
		let items = [
						{
							'name': 'Sign contract for "What are conference organizers afraid of?"',
							'class':'bugs website server',
							'checked':true
						},
						{
							'name': 'Lines From Great Russian Literature? Or E-mails From My Boss?',
							'class': 'bugs server',
							'checked': false
						},
						{
							'name': 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
							'class': 'bugs website server',
							'checked': false
						},
						{
							'name': 'Create 4 Invisible User Experiences you Never Knew About',
							'class': 'bugs',
							'checked': true
						}
					];

		return(
			<div className="tasks">
				<div className="tasks-head">
					<div className="head-child">
						<div className="tasks-sub-head">Tasks:</div>
						<div className="tasks-sub-head active tab" id="bugs" onClick={(e) => this.handleClick(e,"bugs")}><i className="fa fa-bug"></i> BUGS</div>
						<div className="tasks-sub-head tab" id="website" onClick={(e) => this.handleClick(e,"website")}><i className="fa fa-angle-left"></i> <i className="fa fa-angle-right"></i> WEBSITE</div>
						<div className="tasks-sub-head tab" id="server" onClick={(e) => this.handleClick(e,"server")}><i className="fa fa-cloud"></i> SERVER</div>
					</div>
				</div>
				<Content items={items}/>
			</div>
			);
	}
}

function ReturnTask(props){
	let classname = props.item.class + " task-content-item";
	let checked = props.item.checked;
	console.log(classname);
	return(
		<div className={classname}>
			<input type="checkbox" className="task-check" defaultChecked={checked} />
			<div className="task-text">{props.item.name}</div>
			<div className="task-opr">
				<i className="fa fa-pencil-alt task-op"></i>
				<i className="fa fa-times task-op"></i>
			</div>
		</div>
	);
}

class Content extends Component{

	render(){
		let contentItems = this.props.items.map(abc => <ReturnTask item={abc} key={abc.name} />);
		return(
			<div className="tasks-content">
				{contentItems}
			</div>
		);
	}
}

export default Tasks;