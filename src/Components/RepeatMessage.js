const RepeatMessage=({nickName,pic})=>{ // props/properties is used to passing the parameter(props) into the function 
                                         //and calling the argument(props) from the function.
    const name='minion'
    const nickname='Frank'
    //  console.log(Nicname)  // props is an object it can be verified in console.... 
     return(
         <div>
             <h1>Message Component</h1>
             <h2>Name is {name}</h2>
             <img src={pic} alt=""></img>
             <h3>Nick-name is {nickName}</h3>
         </div>
      )
 }
 
 export default RepeatMessage;