import React, { useState } from 'react'
import Counter from './comp/Counter';
import PostList from './comp/PostList';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript2', body: 'Description2' },
    { id: 3, title: 'JavaScript3', body: 'Description3' },
  ])

  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: 'Description' },
    { id: 2, title: 'Python2', body: 'Description2' },
    { id: 3, title: 'Python3', body: 'Description3' },
  ])

  const [posts3, setPosts3] = useState([
    { id: 1, title: 'Java', body: 'Description' },
    { id: 2, title: 'Java2', body: 'Description2' },
    { id: 3, title: 'Java3', body: 'Description3' },
  ])

  return (
    <div className="App">
      <PostList posts={posts} title="Posts for JS" />
      <PostList posts={posts2} title="Posts for Python" />
      <PostList posts={posts3} title="Posts for Java" />
    </div>
  );
}

export default App;
