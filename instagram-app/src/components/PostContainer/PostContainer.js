import React from 'react';
import './PostContainer.css';
import Post from './Post';

const PostsContainer = props => {
  return (
    <div className="post-container">
      {props.posts.map(current => <Post key={current.imageUrl} post={current} />)}
    </div>
  );
};

export default PostsContainer;

       

   