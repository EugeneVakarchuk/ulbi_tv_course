import React, { useState } from 'react'
import Counter from './comp/Counter';
import PostForm from './comp/PostForm';
import PostList from './comp/PostList';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript2', body: 'Description2' },
    { id: 3, title: 'JavaScript3', body: 'Description3' },
  ])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="Posts for JS" />
    </div>
  );
}

export default App;
