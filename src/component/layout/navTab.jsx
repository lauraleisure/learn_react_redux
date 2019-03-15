import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import './layout.css'



export default class NavTab extends Component{

   static propTypes={
       tabs:PropTypes.array.isRequired,
   }

   render(){
          return (<div className='pages noScrollDiv'>
            {this.props.children}
              {this.props.tabs.length>0&&<div className='nav_bottom_tab flex-box jc-s ai-c' >
                  {this.props.tabs.map((tab,index)=>{
                      return <NavLink key={index} className={'icon '+tab.class} style={{width:tab.width}} to={tab.url}>
                          <dl>
                              <dt></dt>
                              <dd>{tab.title}</dd>
                          </dl>
                      </NavLink>
                  })}
              </div>}
         </div>)
   }
}


