import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';


const Comment = props => {
  return (
    <div className="comment-content"> 
      <span className="comment-username">     
        {props.comment.username}
      </span>
      <span className="comment-text">
        {props.comment.text}
      </span>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
