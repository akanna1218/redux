import { createSlice } from "@reduxjs/toolkit"  // import this slice creating method

const initialState={
    count:0
}

export const counterSlice=createSlice({
    name:'counter',
    initialState,               //is a fixed property name expected by the createSlice function in Redux Toolkit.
    reducers:{
        increment:(state)=>{        // when a acton is dispatched redux calls the reducer function, and it passes the current state of the respective slice to the  state parameter , and after that it is altered and stored . this is happened because of IMMERS working on background
            state.count+=1;
            console.log('incremented')
        },
        decrement:(state)=>{
            state.count-=1;
        },
        reset:(state)=>{                                                // this is arrow function
            state.count=0
        },
        addValue(state,action){                                         // this is normal function definition
            state.count+=action.payload                         //this payload contains the value that is passed to the dispatch
        }
    }
})

export  const {increment,decrement,reset,addValue}=counterSlice.actions; // In summary, exporting increment and decrement allows you to easily import and use these action creators in your components, making it straightforward to dispatch actions and update the state managed by your Redux slice.
                                                         //  it is saying that both increment and decrement are actions of the counterSlice varaible
export default counterSlice.reducer;                    // Again we use export this reducer because , it will directly export the reducer ,