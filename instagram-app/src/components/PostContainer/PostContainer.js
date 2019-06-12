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
       
       <div className='post-content'>
         <div className='icons-box'>
           <i className="far fa-heart"></i>
           <i className="far fa-comment"></i>
         </div>
         <p className='likes'>{props.post.likes} likes</p>
     
         {props.post.comments.map(item => {
           return <CommentSection comment={item} key={item.id}/>
         })}
       
         <p className='time-stamp'>{props.post.timestamp}</p>
         <hr/>
         <div className='input-box'>
           <input className='comment-input' placeholder='Add a comment...'/>
           <div className='dots'>...</div>
         </div>
       </div>
    </div>
  )
}


export default PostContainer;

   