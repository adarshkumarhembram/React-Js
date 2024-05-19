import React,{useState} from 'react'


const App=()=> {

    const [count,setCount]= useState(0);
    console.log(count);
    console.log(setCount);

    const handleClick=()=>{
        setCount(count+1);
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick} >+</button>
    </div>
  )
}

export default App
