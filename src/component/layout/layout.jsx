import React,{Component} from 'react'
import PropTypes from 'prop-types'

import Crumb from "../crumb/crumb";
import './layout.css'

export default class Layout extends Component{
    static propTypes={
        title:PropTypes.string,
        goBack:PropTypes.func,
        logout:PropTypes.func
    }

     render(){
          return (<div className='container noScrollDiv'>
              {this.props.title&&<Crumb title={this.props.title} goBack={this.props.goBack} logout={this.props.logout}/>}
              {this.props.children}
          </div>)
     }
}



