import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './commentAdd.css'

export default class CommentAdd extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            content:'',
        }
        // this.handleSumbit=this.handleSumbit.bind(this);
    }

    static propTypes={
        addComment:PropTypes.func.isRequired
    }
    changeVal(evt){
        var obj={};
        obj[evt.target.id]=evt.target.value;
        this.setState(obj);
    }
    handleSubmit=()=>{//es6的写法
       const comment=this.state;
       this.props.addComment(comment);
       //清除输入数据
        this.setState({username:'',content:'',});
    }


     render(){
          return (<div className='comment-add'>
          <div className='form-group flex-box jc-s ai-c halfpxline_after'>
              <div className='form-title'>用户名</div>
              <div className='form-input'>
                  <input id='username' type="text" placeholder='请输入用户名' value={this.state.username} onChange={this.changeVal.bind(this)}/>
              </div>
          </div>
          <div className='form-group flex-box jc-s ai-c halfpxline_after'>
                  <div className='form-title'>评论内容</div>
                  <div className='form-input'>
                    <textarea id='content' placeholder='请输入评论内容' value={this.state.content} onChange={this.changeVal.bind(this)} />
                  </div>
            </div>
           <div className='form-group submitBtn halfpxline_after'>
               <button onClick={this.handleSubmit}>提交</button>
           </div>
          </div>)
     }
}


