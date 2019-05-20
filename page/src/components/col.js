import React, { Component } from 'react';
import "./col.css"
import logo from '../logo.svg';
export class Col extends Component{
	state={
	     cols: [
              {name:"Dashboard" , ico:'fas ff fa-stream'},
              {name:"User Profile", ico:'fa ff fa-user'},
              {name:'Table List' ,ico:'fas ff fa-window-restore'},    
              {name:'Typography' ,ico:'fas ff fa-file-alt'},
              {name:'Icons' ,ico:'	fas ff fa-dice-d20	'},
              {name:'Maps' ,ico:'fas ff fa-map-marker-alt'},
              {name:'Notifications' ,ico:'fa ff fa-bell'},
              {name:'RTL Support' ,ico:'fas ff fa-dragon'}
	     	]	
	     };
	newState(){
		return this.state.cols.map((name,index,ico)=>
	    <div className='b3' key={index}>
	     <i className={this.state.cols[index].ico}></i>
	     <p className='mid'>{this.state.cols[index].name}</p>
		</div>
			
	    )
	}
	render(){
		return(
			<div className="main">
			     <div className="head">
			         <img src={logo} className="App-logo" alt="logo" />
			         <a href='#' className='b1'>CREATIVE TIM</a> 
			     </div>
		         <hr/>
                 {this.newState()}
			</div>
			)
	}
}
 export default Col;