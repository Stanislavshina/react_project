import React, {useState} from 'react';

function App() {
  let [likes, setLikes] = useState(0);
  let [value, setValue] = useState('text here');
  const increment = () => {
    setLikes(likes+=1)
    console.log(likes);
  };
  const decrement = () => {
    setLikes(likes-=1)
    console.log(likes);
  };
  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input
        type='text'
        value={value}
        placeholder='wow'
        onChange={e=>setValue(e.target.value)}
      />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
