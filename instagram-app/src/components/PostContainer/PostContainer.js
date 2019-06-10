import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
  return (
    <div className='post-container'>
       <div className='post-header'>
         <img className='thumbnail' src={props.post.thumbnailUrl} alt={props.post.username}/>
         <p className='username'>{props.post.username}</p>
       </div>
      <img className='post-img' src={props.post.imageUrl} alt={props.post.username} />
      <CommentSection />
    </div>
  )
}

export default PostContainer;

   