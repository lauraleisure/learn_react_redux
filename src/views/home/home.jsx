import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import Layout from '../../component/page_layout/layout/layout'
import Avatar from '../../component/user/avatar'

import {setCrumb} from '../../component/page_layout/crumb/redux/actionCreators'
import {setLayout} from '../../component/page_layout/layout/redux/actionCreators'
import {homeNav} from '../../component/page_layout/nav/redux/actionCreators'

import './home.css'

class Home extends Component{
    static propTypes={
        iconList:PropTypes.array.isRequired
    }
    componentDidMount(){
        /*  this.props.setCrumb({title:'首页',hasGoBack:true,hasLogout:false});*/
        this.props.setLayout({
            showCrumb:false,
            showNav:true
        });
        this.props.homeNav();
    }
     render(){
          return (<Layout>
            <div>
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
            </div>
          </Layout>)
     }
}

export default connect(state=>({iconList:state.home}),
    {setCrumb,setLayout,homeNav})(Home)
