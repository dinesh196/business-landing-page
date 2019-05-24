import React, { Component } from 'react';
import './tasks.css';

class Tasks extends Component{
	render(){
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
				<Content />
			</div>
			);
	}
}

class Content extends Component{
	constructor(props){
		super(props);
		this.state = {
			items: ['Sign contract for "What are conference organizers afraid of?"',
					'Lines From Great Russian Literature? Or E-mails From My Boss?',
					'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
					'Create 4 Invisible User Experiences you Never Knew About']
		}
		let contentItems = this.state.items.map(item => {
			<div className="content-item"><input type="checkbox">this.props.item</input><i className="fa fa-pencil"></i><i className="fa fa-"></i></div>
		});
	}

	render(){
		return(
			<div className="tasks-content">
				{this.contentItems}
			</div>
			);
	}
}

export default Tasks;