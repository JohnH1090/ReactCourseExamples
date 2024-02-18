//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {
  const [emotion, setEmotion] = useState("happy");
 // console.log(what);
  return (
    <div className="App">
      <h1>Current Emotion is {emotion} </h1>
    </div>
  );
}

export default App;
