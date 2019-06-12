import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

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


CommentSection.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};
  

export default CommentSection;