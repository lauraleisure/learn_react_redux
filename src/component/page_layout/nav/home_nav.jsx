import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink,Switch,Route} from 'react-router-dom'
import {connect} from "react-redux";

import './nav.css'
import UserDetail from "../../../views/users/user-detail";
import Comment from "../../../views/comment/comment";
import Home from "../../../views/home/home";

class HomeNav extends Component{
    static propTypes={
        tabs:PropTypes.array.isRequired
    }
    
     render(){
         return (<div className='pages noScrollDiv'>
             {this.props.children}

             {this.props.tabs.length>0&&<div className='nav_container flex-box jc-s ai-c' >
                 {this.props.tabs.map((tab,index)=>{
                     return <NavLink key={index} className={'icon '+tab.class} style={{width:tab.width}} to={tab.url}>
                         <dl>
                             <dt></dt>
                             <dd>{tab.title}</dd>
                         </dl>
                     </NavLink>
                 })}
             </div>}

           {/*  <Switch>
                 <Route path='/' exact component={Home}/>
                 <Route path='/comment' exact component={Comment}/>
                 <Route path='/my' exact component={UserDetail}/>
             </Switch>*/}
         </div>)
     }
}

export default connect(state=>({tabs:state.nav.homeNav}), null)(HomeNav)
