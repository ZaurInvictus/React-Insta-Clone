import React from 'react';

const CommentInput = props => {
  return (
    <form className='input-form' onSubmit={props.submitComment}>
      <input 
        className='comment-input' 
        type="text" 
        value={props.comment}
        onChange={props.changeComment}
        placeholder="Add comment... " 
      />
      <button 
       className='input-button'
      >...
      </button>
     </form>
  );
};

export default CommentInput;
