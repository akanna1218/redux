import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,reset,addValue } from '../features/counter/counterSlice';
const Counter = () => {

  const count =useSelector((state)=>state.counter.count)    // useSelector is used to pick specific data from the store . here state = store , counter = the key which we have given in the store's reducer
  const dispatch=useDispatch();
  const [userValue,setUserValue]=useState(0);
  const finalvalue=Number(userValue)||0;                    // important to check the type
  const resetAll =()=>{
    setUserValue(0);
    dispatch(reset())
  }
  
  return (
    <div>Counter

          <div>{count}</div>
       
          <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            
          </div>
          <input type="text" value={userValue} onChange={(e)=>setUserValue(e.target.value)}/>

          <div>
                <button onClick={resetAll}>Reset</button>
                <button onClick={()=>dispatch(addValue(finalvalue))}>Add Count</button>

          </div>
    </div>
  )
}

export default Counter