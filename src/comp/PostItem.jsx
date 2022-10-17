import React from 'react'

const PostItem = (prors) => {
  return (
    <div className='post'>
      <div className="post__content">
        <strong>{prors.number}, {prors.post.title} </strong>
        <div>
          {prors.post.body}
        </div>
      </div>
      <div className="post__btn">
        <button>Удалить</button>
      </div>
    </div>
  )
}

export default PostItem;