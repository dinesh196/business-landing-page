import React from 'react';
import './test1.css';

class TESTS extends React.Component{

 render(){   
      return (
      <div className="outer-box1"  >
          <div className="graph-box"><img className="graph-image" src={require('../' +this.props.i + '.png')}  style={{backgroundColor:`${this.props.bgcolor}`}}/></div>
          <div className="data-heading">{this.props.dataheader}</div><br/>
          <div className="data-body">{this.props.databody}</div><br/>
        <div className="horizontalLine"></div>
        <div className="data-footer"><i className={`${this.props.datafooticon}`} style={{fontSize:"14px"}}></i>  {this.props.footer}{this.props.datafooter}</div>
       </div>
      )
 }
}

export default TESTS;