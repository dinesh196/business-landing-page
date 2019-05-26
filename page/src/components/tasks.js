import React, { Component } from 'react';
import './tasks.css';

class Tasks extends Component{
	render(){
		let items = ['Sign contract for "What are conference organizers afraid of?"',
					'Lines From Great Russian Literature? Or E-mails From My Boss?',
					'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
					'Create 4 Invisible User Experiences you Never Knew About'];
		return(
			<div className="tasks">
				<div className="tasks-head">
					<div className="head-child">
						<div className="tasks-sub-head">Tasks:</div>
						<div className="tasks-sub-head"><i className="fa fa-bug"></i> BUGS</div>
						<div className="tasks-sub-head"><i className="fa fa-angle-left"></i> <i className="fa fa-angle-right"></i> WEBSITE</div>
						<div className="tasks-sub-head"><i className="fa fa-cloud"></i> SERVER</div>
					</div>
				</div>
				<Content items={items}/>
			</div>
			);
	}
}

function ReturnTask(props){
	return(
		<div className="task-content-item">
			<input type="checkbox" />
			<div className="task-text">{props.item}</div>
			<div className="task-opr">
				<i className="fa fa-pencil-alt task-op"></i>
				<i className="fa fa-times task-op"></i>
			</div>
		</div>
	);
}

class Content extends Component{

	render(){
		let contentItems = this.props.items.map(abc => <ReturnTask item={abc} key={abc}/>);
		return(
			<div className="tasks-content">
				{contentItems}
			</div>
		);
	}
}

export default Tasks;