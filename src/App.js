import './App.css';
import AddPost from './components/AddPost';
import Counter from './components/Counter';
import PostBox from './components/PostBox';



//IMMER used for creating immutable objects.
import { produce } from "immer"

const A=[{name:'ajay',age:25},{name:'kumar',age:23}]
const B=A.slice()
B[1]={...B[1],age:24}
console.log(A)
console.log(B);

const C=produce(A,draft=>{              // this produce will handle the copying action .
                                        // copy and use this code in react to see the working action
    draft[1].age=26
})
console.log(C);


function App() {
  return (
  <div className='app'>
    <Counter />
    <AddPost />
    <PostBox />
  </div>
  );
}

export default App;
 