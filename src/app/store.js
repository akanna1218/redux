import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import ProfilePostsReducer from '../features/posts/postSlice'

export const store=configureStore({
    reducer:{
        counter:counterReducer,
        profilePosts:ProfilePostsReducer,
    }
})