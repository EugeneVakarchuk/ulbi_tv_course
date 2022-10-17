import React, { useState } from 'react'
import MyInput from './ui/input/MyInput';
import MyButton from './ui/button/MyButton';

const PostForm = ({ create }) => {

  const [post, setPost] = useState({ title: '', body: '', })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }


  return (
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
  );
};

export default PostForm;