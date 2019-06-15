import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }
 
  //ADDING NEW COMMENT
  commentHandler = e => {
    this.setState({ comment: e.target.value });
  };

  addNewComment = e => {
    e.preventDefault();
    const newComment = { text: this.state.comment, username: 'zaur' };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: '' });
  };

 
  
  render() {
    return (
      <div className='comment-section'>
        {this.state.comments.map((current, index) => <Comment comment={current} key={index} />)}
        <CommentInput 
          comment={this.state.comment}
          submitComment={this.addNewComment}
          changeComment={this.commentHandler} 
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
