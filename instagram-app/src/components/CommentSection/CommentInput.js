import React from 'react';

const CommentInput = props => {
  return (
    <form className='input-form'>
      <input 
        className='comment-input' 
        type="text" 
        placeholder="Add comment... " 
      />
      <div className='dots'>...</div>
     </form>
  );
};

export default CommentInput;
