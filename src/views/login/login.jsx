import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";

import Layout from '../../component/page_layout/layout/layout'
import {setTitle} from '../../component/page_layout/crumb/redux/actionCreators'
import {setLayout} from '../../component/page_layout/layout/redux/actionCreators'
import {homeNav} from '../../component/page_layout/nav/redux/actionCreators'

class Login extends Component{
    static propTypes={
        title:PropTypes.string.isRequired,           
    }  
     componentDidMount(){
       /* this.props.setTitle('首页');*/
        this.props.setLayout({
            showCrumb:false,
            showNav:true
        });
        this.props.homeNav();
    }
     render(){
          return (<Layout>
           <div className='loginPage noScrollDiv'>
               <div className='item-part  '>
                   <input type="text" value={}/>
               </div>
          </div>
          </Layout>)
     }
}

export default connect(state=>({title:state}),
    {setTitle,setLayout,homeNav})(Login)
