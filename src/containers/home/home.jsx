import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {Route,Switch} from 'react-router-dom'

import Layout from "../../component/layout/layout";
import NavTab from '../../component/layout/navTab';


import {goBack,logout} from '../../redux/crumb/actionCreators'

import {connect} from "react-redux";
import Comment from "../../views/comment/comment";

class Home extends Component{
    static propTypes={
        title:PropTypes.string.isRequired,
        goBack:PropTypes.func.isRequired,
        logout:PropTypes.func.isRequired,
        tabs:PropTypes.array.isRequired,
        reloadPage:PropTypes.func.isRequired,
    }
    goBack=()=>{
        this.props.goBack('/');
    }
    logout=()=>{
        this.props.logout('/logout');
    }
    reloadPage=()=>{
        this.props.reloadPage();
    }
     render(){
          return (<Layout title={this.props.title} goBack={this.goBack} logout={this.logout}>
              <NavTab tabs={this.props.tabs}>
                  <Switch>
                      {this.props.tabs.map((tab,index)=>{
                          return <Route key={index} path={tab.url} exact component={tab.pages==='home'?Comment:(tab.pages==='comment'?Comment:tab.pages==='my'?Comment:null)} />
                      })}
                  </Switch>
              </NavTab>
          </Layout>)
     }
}

export default connect(state=>({title:state.crumbs.title,tabs:state.navTabs}),
    {goBack,logout})(Home)
