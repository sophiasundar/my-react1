import {useState} from 'react'  // usestate is a hook, createdd  by someone we make use of it.    

const Counter=()=>{

   let like=0;

   const [state,setState]=useState("0") //initial value
   // state = variable
   // setstate => function=> responsible for updating value of the state variable
    return(
        <>
        <div className="counter">
              {/* <h1>Counter</h1> */}
              <button  
              onClick={()=>{
                   like++
                   console.log(like)
                   setState()
              }}>Like {like} {state}</button>
        </div>
        </> 
    )
}
export default Counter;