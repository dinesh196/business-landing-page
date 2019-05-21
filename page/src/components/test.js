import React, { Component } from 'react';
import './test.css';



class TEST extends React.Component{

 render(){   
      return (
      <div className="outer-box"  >
          <div className="box">
            <div className="box-child-1">
              <div className="logo-box"  style={{backgroundColor:`${this.props.colors}`}}><i className={`${this.props.icons}`}></i></div>
            </div>  
            <div className="box-child-2">
                <div className="box-header">{this.props.header}</div><br/>
                <div className="box-body">{this.props.body}</div>
            </div>
          </div>
          <div className="box-line"/>
          <div className="box-footer"> <i className={`${this.props.footicon}`} style={{fontSize:"14px"}}></i>  {this.props.footer}</div>
      </div>
      	)
  }

	}


	export default TEST;