import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {Route,Switch} from 'react-router-dom'

import Layout from "../component/layout/layout";
import Avatar from "../component/user/avatar";
import NavTab from '../component/layout/navTab';

import {goBack,logout} from '../redux/crumb/actionCreators'
import './home.css'
import {connect} from "react-redux";


class App extends Component{
    static propTypes={
        title:PropTypes.string.isRequired,
        goBack:PropTypes.func.isRequired,
        logout:PropTypes.func.isRequired,
        tabs:PropTypes.array.isRequired,
        user:PropTypes.object.isRequired,
    }
    goBack=()=>{
        this.props.goBack('/');
    }
    logout=()=>{
        this.props.logout('/logout');
    }
    render(){
        return (<Layout title={this.props.title} goBack={this.goBack} logout={this.logout} tabs={this.props.tabs}>
            <Avatar user={this.props.user}/>
            <div className='icon-container'>
                <div className='icon-wrapper'>  home</div>

            </div>
            <NavTab tabs={this.props.tabs} reloadPage={this.reloadPage}>
                <Switch>
                   {/* {this.props.tabs.map((tab,index)=>{
                        return <Route key={index} path={tab.url} exact component={tab.pages==='home'?Comment:(tab.pages==='comment'?Comment:tab.pages==='my'?Comment:null)} />
                    })}*/}
                </Switch>
            </NavTab>
        </Layout>)
    }
}

export default connect(state=>({title:state.crumbs.title,tabs:state.navTabs,user:state.userAvatar}),
    {goBack,logout})(App)
