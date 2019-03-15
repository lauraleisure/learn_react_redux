import React,{Component} from 'react'
import PropTypes from 'prop-types'

import './crumb.css'
export default class Crumb extends Component{
   static propTypes={
       title:PropTypes.string,
       goBack:PropTypes.func,
       logout:PropTypes.func,
   }

     render(){
          return (<div className='crumb-part flex-box jc-s ai-c'>
           <div  className={this.props.goBack?'goBack':''} onClick={this.props.goBack?this.props.goBack:null}></div>
           <div className='crumb-title'>{this.props.title}</div>
           <div className='crumb-logout' onClick={this.props.logout?this.props.logout:null}>{this.props.logout?'退出':''}</div>
          </div>)
     }
}


