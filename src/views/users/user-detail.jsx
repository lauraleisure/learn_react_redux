import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";

import Layout from '../../component/page_layout/layout/layout'
class UserDetail extends Component{
    state={
        realName:'Leisure',
        sex:'female',
        phone:'18162779238',
        photo:'/images/user/user.jpg',
        code:'',
        pwd:'',
        repwd:'',
    }
    static propTypes={
        user:PropTypes.object.isRequired,
    }
    changeVal(evt){
        var obj={};
        obj[evt.target.id]=evt.target.value;
        this.setState(obj);
    }
     render(){
         return (<Layout>
                   <div className='user-wrapper'>
                       <div className='bg-w'>
                           <div className='items flex-box jc-s ai-c'>
                               <div className='txt-title'>头像</div>
                               <div className='txt-cont'>{this.props.user.photo}</div>
                           </div>
                           <div className='items flex-box jc-s ai-c'>
                               <div className='txt-title'>姓名</div>
                               <div className='txt-cont'>{this.props.user.realName}</div>
                           </div>
                           <div className='items flex-box jc-s ai-c'>
                               <div className='txt-title'>电话</div>
                               <div className='txt-cont'>{this.props.user.phone}</div>
                           </div>
                           <div className='items flex-box jc-s ai-c'>
                               <div className='txt-title'>验证码</div>
                               <div className='txt-cont'><input id='code' type='text' value={this.state.code} placeholder='短信验证码' onChange={this.changeVal.bind(this)}/></div>
                           </div>
                       </div>
                       <div className='bg-w'>
                           <div className='items flex-box jc-s ai-c'>
                               <div className='txt-title'>性别</div>
                               <div className='txt-cont'>{this.state.sex}
                               <input type='radio' value='male' />男
                               <input type='radio' value='female'/>女
                               </div>
                           </div>
                           <div className='items flex-box jc-s ai-c'>
                               <div className='txt-title'>设置密码</div>
                               <div className='txt-cont'><input id='pwd' type='password' value={this.state.pwd} placeholder='填写登录密码' onChange={this.changeVal.bind(this)}/></div>
                           </div>
                           <div className='items flex-box jc-s ai-c'>
                               <div className='txt-title'>确认密码</div>
                               <div className='txt-cont'><input id='repwd' type='password' value={this.state.repwd} placeholder='再次输入密码'onChange={this.changeVal.bind(this)}/></div>
                           </div>
                       </div>
                       <div className='sub-btn'>
                           <button className='submitBtn'>确认修改</button>
                       </div>
                 </div>
             </Layout>
           )
     }
}

export default connect(state=>({user:state.userDetail}),
    null)(UserDetail)
