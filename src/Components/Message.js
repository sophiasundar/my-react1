const Message=(props)=>{
   const name='minion'
   const nickname='Frank'
    console.log(props)
    return(
        <div>
            <h1>Message Component</h1>
            <h2>Name is {name}</h2>
            <img src={props.image} alt=""></img>
            <h3>Nick-name is {props.Nicname}</h3>
        </div>
     )
}

export default Message;
//npm i react-router-dom@6