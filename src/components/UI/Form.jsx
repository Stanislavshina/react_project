import React, {useState} from 'react';
import InputForm from './input/InputForm';
import ButtonForm from './button/ButtonForm';

const Form = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  };
  return (
    <form >
    <InputForm 
      type='text'
      placeholder='Нахвание поста'
      value={post.title}
      onChange={e => setPost({...post, title: e.target.value})}
    />
    <InputForm 
      value={post.body}
      onChange={e => setPost({...post, body: e.target.value})}
      type='text'
      placeholder='Описание поста'
    />
    <ButtonForm
      onClick={addNewPost}
    >Создать пост
    </ButtonForm>
  </form>
  );
}

export default Form;
