import React from 'react';

const PostHeader = (props) => {
 return (
   <div className="post-header">
     <img
       alt="post header"
       className="thumbnail"
       src={props.post.thumbnailUrl}
     />
    <div className='header-username'>{props.post.username}</div>
  </div>
 );
};


export default PostHeader;