import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom'

import Layout from '../../component/page_layout/layout/layout'
import {setCrumb} from '../../component/page_layout/crumb/redux/actionCreators'
import {setLayout} from '../../component/page_layout/layout/redux/actionCreators'
import {homeNav} from '../../component/page_layout/nav/redux/actionCreators'

import './login.css'
class Login extends Component{
    static propTypes={
        // title:PropTypes.string.isRequired,
    }  
     componentDidMount(){
       /*  this.props.setCrumb({title:'登录页',hasGoBack:true,hasLogout:false});*/
        this.props.setLayout({
            showCrumb:false,
            showNav:false
        });
        this.props.homeNav();
    }
     render(){
          return (<Layout>
           <div className='loginPage noScrollDiv'>
               <div className='login-part'>
                   <div className='logo '>
                   </div>
                   <div className='item text-left title'> 领先的主动营销产品</div>
                   <div className='item  text-left desc '> 挖掘营销潜力 传播无限可能 </div>
               </div>
               <div className='login-part'>
                   <div className='item  '>
                       <input type="text" placeholder='用户名'/>
                   </div>
                   <div className='item  '>
                       <input type="password" placeholder='密码'/>
                   </div>
                   <div className='item text-right '><NavLink className='white-text'  to='/forget'>忘记密码？</NavLink></div>
               </div>
               <div className='login-part'>
                   <div className='item flex-box jc-c ai-c'><span className='checkBox circle checked'> </span>已阅读并同意 <b> <NavLink className='blue-text' to='/agreement'>《用户注册协议》</NavLink></b></div>
               </div>
               <div className='sub-btn '>
                    <button className='submitBtn'>登录</button>
               </div>
          </div>
          </Layout>)
     }
}

export default connect(state=>({}),
    {setCrumb,setLayout,homeNav})(Login)
