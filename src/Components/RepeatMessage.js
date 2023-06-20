const RepeatMessage=({nickName,pic})=>{ // props/properties is used to passing the parameter(props) into the function 
                                         //and calling the argument(props) from the function.
    const name='minion'
    const nickname='Frank'
    //  console.log(Nicname)  // props is an object it can be verified in console.... 
     return(
         <div className="border">
             <img src={pic} alt="" className="profile-pic"></img>
             <h1>Name is {name}</h1>
             <h2>Nick-name is {nickName}</h2>
         </div>
      )
 }
 
 export default RepeatMessage;