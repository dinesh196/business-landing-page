import React, { Component } from 'react';
import '../App.css';

export class Header extends Component {
	render() {
		return (
			<div className="head">
            <a href="#" className="h1">Dashboard</a>
            <div className="blanck"></div>
            <input className="h2" type="text" placeholder="Search"></input>	
            <i className='fas ic frst fa-search'></i>	
            <i className='fas ic fa-stream'></i>
			<i className='fa ic fa-bell'></i>
			<i className='fa ic lst fa-user'></i>
			</div>
		);
	}
}

export default Header;