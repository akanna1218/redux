import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllState } from '../features/posts/postSlice';

const PostBox = () => {
    const posts=useSelector(selectAllState);    /// instead of mentioning the state in every component we directly declared a variable in slice, so if we want to update we can directly go to slice , that will reflect in all components
    const renderPosts=posts.map(post=>(
        <li key={post.id}>
            {post.item.substring(0,9)}
        </li>
    ))
  return (
    <div>PostBox
        <div>{renderPosts}</div>
    </div>
  )
}

export default PostBox