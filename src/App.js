import React, {useRef, useState, useMemo} from 'react';
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import Form from './components/UI/Form';
import InputForm from './components/UI/input/InputForm';
import SelectForm from './components/UI/select/selectForm';
// import Counter from './components/counter';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 0, title: 'JavaScript', body: 'Простой язык' },
    {id: 1, title: 'Python', body: 'Старый язык' },
    {id: 2, title: 'GO-lang', body: 'Современный язык' }
  ]);

  const createPost = (post) => {
    setPosts([...posts, post])
  };


  const removePost = (postToRemove) => {
    setPosts(posts.filter(post => post.id !== postToRemove.id))
  }

  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts = useMemo(() => {
    console.log('worked');
    if(filter.sort){
      return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]));
    } else {
      return posts
    }
  }, [filter.sort, posts]);

  const sortedAndSearchPosts = useMemo(()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])


  return (
    <div className="App">
      <Form create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      {sortedAndSearchPosts.length 
      ? <PostList 
          remove={removePost}
          posts={sortedAndSearchPosts} 
          title='Список постов:'/>
      : <h4 style={{textAlign: 'center', 
                    fontSize: '20px', 
                    textTransform: 'uppercase'}}
        >
          Posts not found
        </h4>    
      }
    </div>
  );
}

export default App;
