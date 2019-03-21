import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import CommentAdd from '../../component/comment/comment-add'
import CommentList from '../../component/comment/comment-list'
import  Layout from '../../component/page_layout/layout/layout'
import {addComment,deleteComment,getComments} from './redux/actionCreators'
import './comment.css'


class Comment extends Component{

    static  propTypes={
        comments:PropTypes.array.isRequired,
        addComment:PropTypes.func.isRequired,
        deleteComment:PropTypes.func.isRequired,
        getComments:PropTypes.func.isRequired,

    }
    componentDidMount(){
        /*异步获取所有评论数组*/
        this.props.getComments();
    }


     render(){
          return (<Layout>
              <div className='commentPage scrollDiv'>
              <div className='title'>请发表对React的评论</div>
              <CommentAdd addComment={this.props.addComment} />
              <CommentList comments={this.props.comments} deleteComment={this.props.deleteComment}/>
              </div>
          </Layout>)
     }
}

export default connect(state=>({comments:state.comments}),
    {addComment,deleteComment,getComments})(Comment)
