import React from 'react';
import './PostContainer.css';
import Post from './Post';

const PostsContainer = props => {
  return (
    <div className="post-container">
      {props.posts.map(current => <Post post={current} key={current.imageUrl} />)}
    </div>
  );
};

export default PostsContainer;

       

   