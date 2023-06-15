import './App.css';
// import { Component } from 'react';
// import Firstcode from './Components/Firstcode';
import Message from './Components/Message';
import RepeatMessage from './Components/RepeatMessage';


function App() { 
 
  const students = [
    {
      nickName: "Yamuna",
      pic: "https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg",
    },

    {
      nickName: "Vindya",
      pic: "https://i.pinimg.com/736x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg",
    },

    {
      nickName: "Sushil",
      pic: "https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png",
    },
    {
      nickName: "Bharti",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPyLBCLuRQ2EMf1Tdz8GRtdsy2KAGUcZgAg&usqp=CAU",
    },
    {
      nickName: "Shivam",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGf1LsCO_POD_MWK0T40UPrQZfYOjgU0SvQ&usqp=CAU",
    },
  ];

 

  return (
    <div className="App">
       {/* <Firstcode></Firstcode>   */}
       {/* <Message Nicname="Frank" image="https://3.bp.blogspot.com/-nBbcWGZf2ZQ/UrmRvZHdxZI/AAAAAAAACqg/3-v3lFqGcDo/s1600/minion-image.jpg"></Message> */}
       {/* <Message Nicname="Guvi" image="https://tse3.mm.bing.net/th?id=OIP.DwtwUF50gl3Ue_YXPHvi7AHaDL&pid=Api&P=0&h=180"/> */}
       {/* <RepeatMessage Nicname="Guvi" image="https://tse3.mm.bing.net/th?id=OIP.DwtwUF50gl3Ue_YXPHvi7AHaDL&pid=Api&P=0&h=180"/> */}

       {students.map((element)=>{
        return <RepeatMessage nickName={element.nickName} pic={element.pic}></RepeatMessage>
       })}

       {/* <RepeatMessage Nicname="Frank" image="https://3.bp.blogspot.com/-nBbcWGZf2ZQ/UrmRvZHdxZI/AAAAAAAACqg/3-v3lFqGcDo/s1600/minion-image.jpg"></RepeatMessage> */}
    </div>
  );
}

export default App;
