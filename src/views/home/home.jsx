import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import Layout from '../../component/page_layout/layout/layout'
import Avatar from '../../component/user/avatar'
import './home.css'

class Home extends Component{
    static propTypes={
        iconList:PropTypes.array.isRequired
    }

     render(){
          return (<div>
              <Avatar/>
              <div className='icon-container'>
              <div className='icon-wrapper flex-box jc-s ai-c'>
                  {this.props.iconList.map((icon,index)=>{
                      return <dl className='icon-item' key={index}>
                          <dt className={'icon ' +(icon.class?icon.class:'')}> </dt>
                          <dd className='icon-title'>{icon.title}</dd>
                      </dl>
                  })}
              </div>
          </div>
          </div>)
     }
}

export default connect(state=>({iconList:state.home}),
    null)(Home)
