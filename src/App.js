import React, { useRef, useState } from 'react'
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

  const [post, setPost] = useState({ title: '', body: '', })


  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', body: '' })
  }

  return (
    <div className="App">
      <form>
        <MyInput
          onChange={e => setPost({ ...post, title: e.target.value })}
          value={post.title}
          type="text"
          placeholder="Post name"
        />
        <MyInput
          onChange={e => setPost({ ...post, body: e.target.value })}
          value={post.body}
          type="text"
          placeholder="Post body"
        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      <PostList posts={posts} title="Posts for JS" />
    </div>
  );
}

export default App;
