import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import Avatar from '../../component/user/avatar'
import HomeNav from '../../component/page_layout/nav/home_nav'
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
              <HomeNav/>
          </div>)
     }
}

export default connect(state=>({iconList:state.home}),
    null)(Home)
