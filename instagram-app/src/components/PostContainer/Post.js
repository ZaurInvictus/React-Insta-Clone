import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    }
  }

  //INCREMENTING LIKES
  incrementLike = () => {
    const likes = this.state.likes + 1;
    this.setState({ likes });
  }

  render(){
    return (
      <div className="post-border">
       <PostHeader post={this.props.post}/>
        <div className="post-image-box">
          <img
            alt="post thumbnail"
            className="post-img"
            src={this.props.post.imageUrl}
          />
        </div>
        <div className='post-content'>
          <div className='icons-box'>
            <i className="far fa-heart" onClick={this.incrementLike}></i>
            <i className="far fa-comment"></i>
          </div>
            <span className='likes'>{this.state.likes} likes</span>
            <span className='time-stamp'>{this.props.post.timestamp}</span>
        </div>
        <CommentSection comments={this.props.post.comments} />
      </div>
    );
  };
};

export default Post;
