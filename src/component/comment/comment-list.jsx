import React,{Component} from 'react'
import './commentList.css'
import  CommentItem from '../comment/comment-item'
import PropTypes from 'prop-types'

export default class CommentList extends Component{

    /*给组件类指定属性*/
    static propTypes={
        comments:PropTypes.array.isRequired,
        deleteComment:PropTypes.func.isRequired,
    }

     render(){
          return (<div className='comment-list'>
              <div className='title text-left'> 评论回复：</div>
              {this.props.comments.length===0?
                  <div className='item-wrap '>
                      <div className='txt-cont'>暂无评论，在上方添加评论!!!</div>
                  </div>:
                  this.props.comments.map((comment,index)=>{
                     return  <CommentItem key={index} comment={comment} deleteComment={this.props.deleteComment} index={index}/>
                  })}
          </div>)
     }

}
/*CommentList.prototypes={
    comments:PropTypes.array.isRequired
}*/

