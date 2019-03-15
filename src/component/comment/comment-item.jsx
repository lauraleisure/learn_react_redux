import React,{Component} from 'react'
import './commentItem.css'
import PropTypes from 'prop-types'
export default class CommentItem extends Component{

    static propTypes={
        comment:PropTypes.object.isRequired,
        deleteComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired,
    }

    handleClick=()=>{
        const {comment,deleteComment,index}=this.props;
        if(window.confirm('确定删除'+comment.username+'的评论么？')){
            deleteComment(index);
        }
    }
     render(){
        const comment=this.props.comment;
          return (<div className='item-wrap  '>
              <div className='txt-title flex-box jc-s ai-c halfpxline_after'>
                  <div className='username'>{comment.username}说：</div>
                  <div className='delete' onClick={this.handleClick}>删除</div>
              </div>
              <div className='txt-cont text-left'>{comment.content}</div>
          </div>)
     }
}


