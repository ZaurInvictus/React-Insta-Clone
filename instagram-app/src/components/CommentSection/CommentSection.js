import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
  return (
    <div className='comments-container'>
      <div className='comment-content'>
         <p className='comment-username'>{props.comment.username}</p>
         <p className='comment-text'>{props.comment.text}</p>
      </div> 
    </div>
  )
}

export default CommentSection;