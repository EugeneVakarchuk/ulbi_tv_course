import React from 'react'
import Counter from './comp/Counter';
import PostItem from './comp/PostItem';
import './styles/App.css';

function App() {

  return (
    <div className="App">
      <PostItem post={{ id: 1, title: 'JavaScript', body: 'Description' }} />
      <PostItem post={{ id: 2, title: 'JavaScript2', body: 'Description2' }} />
      <PostItem post={{ id: 3, title: 'JavaScript3', body: 'Description3' }} />
      <PostItem post={{ id: 4, title: 'JavaScript4', body: 'Description4' }} />
      <PostItem post={{ id: 5, title: 'JavaScript5', body: 'Description5' }} />
    </div>
  );
}

export default App;
