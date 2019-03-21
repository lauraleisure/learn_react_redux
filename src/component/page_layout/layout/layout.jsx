import React,{Component} from 'react'
import PropTypes from 'prop-types'

import Crumb from "../crumb/crumb";
import HomeNav from '../nav/home_nav'
import './layout.css'

import {connect} from "react-redux";


class Layout extends Component{
    static propTypes={
        title:PropTypes.string,
        showCrumb:PropTypes.bool,
        showNav:PropTypes.bool
    }

    render(){
        return (<div className='container noScrollDiv'>
            {this.props.showCrumb&&<Crumb title={this.props.title}/>}

            {this.props.showNav?<HomeNav>
                {React.cloneElement(this.props.children)}
                </HomeNav> :React.cloneElement(this.props.children)}
        </div>)
    }
}

export default connect(state=>({showCrumb:state.layoutConfig.showCrumb,showNav:state.layoutConfig.showNav,title:state.crumbs.title}),
    null)(Layout)



