import React, { useState } from 'react'
import Counter from './comp/Counter';
import PostList from './comp/PostList';
import MyButton from './comp/ui/button/MyButton';
import MyInput from './comp/ui/input/MyInput';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript2', body: 'Description2' },
    { id: 3, title: 'JavaScript3', body: 'Description3' },
  ])

  const [title, setTitle] = useState('')

  const addNewPost = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <form>
        <MyInput
          onChange={e => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Post name"
        />
        <MyInput type="text" placeholder="Post body" />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      <PostList posts={posts} title="Posts for JS" />
    </div>
  );
}

export default App;
