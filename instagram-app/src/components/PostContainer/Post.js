import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSectionContainer';


const Post = props => {
  return (
    <div className="post-border">
      <div className="post-header">
         <img
           alt="post header"
           className="thumbnail"
           src={props.post.thumbnailUrl}
         />
      <div className='header-username'>{props.post.username}</div>
     </div>

      <div className="post-image-box">
        <img
          alt="post thumbnail"
          className="post-img"
          src={props.post.imageUrl}
        />
      </div>
      <div className='post-content'>
        <div className='icons-box'>
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
        </div>
          <span className='likes'>{props.post.likes} likes</span>
          <span className='time-stamp'>{props.post.timestamp}</span>
          
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
