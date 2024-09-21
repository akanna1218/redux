import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { postAdd } from '../features/posts/postSlice';

const AddPost = () => {
  const [newPost,setNewPost]=useState('');
  const dispatch=useDispatch()
 const savePost=(e)=>{
e.preventDefault()
dispatch(postAdd(
  newPost

  // {
  //   item:newPost
  //   ,id:nanoid()         // un comment this line for giving direct structure to the reducer
  // }

))
setNewPost('')
 }
  return (
    <>
    <div>AddPost</div>
    <form onSubmit={savePost}>
      <input type="text"
      value={newPost}
      onChange={(e)=>setNewPost(e.target.value)}
               />
               <button >Add</button>
    </form>
    </>
  )
}

export default AddPost