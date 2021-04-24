import React,{useState}from 'react'

const Counter=()=> {
    const[count, setCount]= useState(null)
   const  OnCountClick =()=>{
       setCount(count+1)
   }
    return (
        <div>
            <button onClick={()=>OnCountClick()}>Click Me</button>
            <h1>Current Count:{count}</h1>
        </div>
    )
}

export default Counter
