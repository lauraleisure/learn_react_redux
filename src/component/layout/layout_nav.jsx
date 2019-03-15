import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink,Route,Switch} from 'react-router-dom'

import Crumb from "../crumb/crumb";
import './layout.css'
import Comment from "../../views/comment/comment";//路由组件
export default class LayoutNav extends Component{
    static propTypes={
        title:PropTypes.string,
        tabs:PropTypes.array,
        goBack:PropTypes.func,
        logout:PropTypes.func
    }

     render(){
          return (<div className='container noScrollDiv'>
              {this.props.title&&<Crumb title={this.props.title} goBack={this.props.goBack} logout={this.props.logout}/>}
              {this.props.children}
              {this.props.tabs!=null&&<NavTab tabs={this.props.tabs}   >
                  <Switch>
                      {this.props.tabs.map((tab,index)=>{
                          return <Route key={index} path={tab.url} exact component={tab.pages==='home'?Comment:(tab.pages==='comment'?Comment:tab.pages==='my'?Comment:null)} />
                      })}
                  </Switch>
              </NavTab>}

          </div>)
     }
}


class NavTab extends Component{

    static propTypes={
        tabs:PropTypes.array.isRequired,
    }

    render(){
        return (<div className='pages noScrollDiv'>
            {this.props.children}
            {this.props.tabs.length>0&&<ul className='nav_bottom_tab flex-box jc-s ai-c' >
                {this.props.tabs.map((tab,index)=>{
                    return <NavLink key={index} className={'icon '+tab.class} style={{width:tab.width}} to={tab.url}>
                        <dl>
                            <dt></dt>
                            <dd>{tab.title}</dd>
                        </dl>
                    </NavLink>
                })}
            </ul>}
        </div>)
    }
}

