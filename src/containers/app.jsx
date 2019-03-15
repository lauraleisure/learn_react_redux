import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {Route,Switch} from 'react-router-dom'

import Layout from "../component/page_layout/layout/layout";

import Home from "../views/home/home";
import Comment from "../views/comment/comment";
import UserDetail from '../views/users/user-detail'

import {connect} from "react-redux";

class App extends Component{
    static propTypes={
        title:PropTypes.string.isRequired,
        tabs:PropTypes.array.isRequired,

    }

    render(){
        return (<Layout>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/comment' exact component={Comment}/>
                <Route path='/my' exact component={UserDetail}/>
            </Switch>
              {/* {this.props.tabs.map((tab,index)=>{
                   return <Route key={index} path={tab.url} exact component={tab.pages=='home'?Home:(tab.pages=='comment'?Comment:tab.pages=='my'?UserDetail:'')} />
               })}*/}


        </Layout>)
    }
}

export default connect(state=>({title:state.crumbs.title,tabs:state.nav.homeNav}),
    null)(App)
