import React from 'react';
import ButtonForm from './UI/button/ButtonForm';

const PostItem = ({index, post, remove}) => {
  const {title, body} = post;

  return (
    <li
    className='post'
  >
    <div
      className='post__content'
    >
      {index + 1} - <strong>{title}</strong>
      <div>
        {body}
      </div>
    </div>
    <ButtonForm 
      onClick={()=>{remove(post)}}
      >
      Delete post
      </ButtonForm>
  </li>
  );
}

export default PostItem;
