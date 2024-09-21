import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState=[{
    id:1,
    item:'hello ganesh'},
{
    id:2,
    item:'hello Kumar'
}]


export const postSlice=createSlice({
    name:'profilePosts',
    initialState,
    reducers:{                                                      // this the correct spelling for reducers
        postAdd:{
            reducer:(state,action)=>{
            state.push(action.payload)   },                           // here the state already has a value but we need to display both old and new post , for that , the IMMER is already written inside create slice.
                                                                    // No need to copy old data , when using inside create slice
        
        

           prepare(newPost){                                        // this prepare is a call back function which gets args from dispatch and returns the payload as object in ordered way similar to old data to the reducer.
            return{                                                 // that's why we use {} in this return to make them as object
                payload:{                                           // but for using this prepare we need to split the action to reducer and prepare individually
                    id:nanoid(),
                    item:newPost
                }
            }
        }
                                                                }

    }
})
export const selectAllState=(state=>state.profilePosts)  // in this case this variable is called within the useSelector , which allows us to pick data from  state , that's how it got access to states. 
export const {postAdd}=postSlice.actions;
export default postSlice.reducer;