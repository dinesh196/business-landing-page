import React, {Component} from 'react';
import './col.css';
class Footer extends Component{
    state={
	    buttons:[ 
	         {bname:'HOME'},
	         {bname:'COMPANY'},
	         {bname:'PORTFOLIO'},
	         {bname:'BLOG'}
	             ]
    };
    newButtoon(){
	     return this.state.buttons.map((bname,index)=>
	     	
		         <p className='b4' key={index}>{this.state.buttons[index].bname}</p>
		         )}
	render() {
		 return (<div className='footer'> 
			    {this.newButtoon()}
			    <div className='last'>
			    <p className='l'>2019</p><p className='light'>Creative Tim</p><p>, made with love for a better web</p>
			   </div>
			   </div>
		)
	}
}

export default Footer;