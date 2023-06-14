import './App.css';
// import { Component } from 'react';
// import Firstcode from './Components/Firstcode';
import Message from './Components/Message';


function App() { 
  return (
    <div className="App">
      {/* <h1>Hello World</h1>
      <h2>Welcome to React</h2> */}
       {/* <Firstcode></Firstcode>   */}
       <Message Nicname="Frank" image="https://3.bp.blogspot.com/-nBbcWGZf2ZQ/UrmRvZHdxZI/AAAAAAAACqg/3-v3lFqGcDo/s1600/minion-image.jpg"></Message>
       {/* <Message Nicname="Guvi" image="https://tse3.mm.bing.net/th?id=OIP.DwtwUF50gl3Ue_YXPHvi7AHaDL&pid=Api&P=0&h=180"/>
       <RepeatMessage Nicname="Guvi" image="https://tse3.mm.bing.net/th?id=OIP.DwtwUF50gl3Ue_YXPHvi7AHaDL&pid=Api&P=0&h=180"/> */}
       
    </div>
  );
}

export default App;
