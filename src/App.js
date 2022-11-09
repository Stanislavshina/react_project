import React, {useRef, useState, useMemo} from 'react';
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import ButtonForm from './components/UI/button/ButtonForm';
import Form from './components/UI/Form';
import Modal from './components/UI/Modal/Modal';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 0, title: 'JavaScript', body: 'Простой язык' },
    {id: 1, title: 'Python', body: 'Старый язык' },
    {id: 2, title: 'GO-lang', body: 'Современный язык' }
  ]);

  const createPost = (post) => {
    setPosts([...posts, post])
    setModal(false)
  };


  const removePost = (postToRemove) => {
    setPosts(posts.filter(post => post.id !== postToRemove.id))
  };

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

  return (
    <div className="App">

      <ButtonForm 
        style={{marginTop: '15px'}}
        onClick={()=>setModal(true)}
      >
        Создать пост
      </ButtonForm>
      <Modal
        visible={modal}
        setVisible={setModal}
      >
      <Form create={createPost}/>
      </Modal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      <PostList 
          remove={removePost}
          posts={sortedAndSearchPosts} 
          title='Список постов:'
        />
    </div>
  );
}

export default App;
