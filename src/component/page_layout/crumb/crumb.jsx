import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";

import {goBack,logout} from './redux/actionCreators'
import './crumb.css'

class Crumb extends Component{
    static propTypes={
        title:PropTypes.string,
        goBack:PropTypes.func.isRequired,
        logout:PropTypes.func.isRequired,
    }
    goBack=()=>{
        this.props.goBack('/');
    }
    logout=()=>{
        this.props.logout('/logout');
    }
     render(){
         return (<div className='crumb-part flex-box jc-s ai-c'>
             <div  className={this.props.goBack?'goBack':''} onClick={this.props.goBack?this.props.goBack:null}> </div>
             <div className='crumb-title'>{this.props.title}</div>
             <div className='crumb-logout' onClick={this.props.logout?this.props.logout:null}>{this.props.logout?'退出':''}</div>
         </div>)
     }
}

export default connect(state=>({title:state.crumbs}),
    {goBack,logout})(Crumb)
