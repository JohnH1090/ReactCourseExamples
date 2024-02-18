//import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';


function App() {
  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("Tired");
  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here`);
  }, [secondary])
 
  return (
    <div className="App">


      <h1>Current Emotion is {emotion} </h1>
      <button onClick={() => setEmotion("Sad") }>Sad</button>
      <button onClick={() => setEmotion("Excited") }>Excited</button>
      <button onClick={() => setEmotion("Happy") }>Happy</button>

      <h2>Current Secondary Emotion is {secondary} </h2>
      <button onClick={() => setSecondary("Greatful") }>Greatful</button>
      <button onClick={() => setSecondary("Tired") }>Tired</button>
    </div>
  );
}

export default App;
