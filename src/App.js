import React from 'react';
import './App.css';
import Greet  from './components/Greet';
import Welcome from './components/Welcome';
// import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name = "Raj" heroname = "BAtman"> 
          <p> Child </p>
      </Greet>
      <Greet name = "Richa"  heroname = "BAtman"> 
          <p> Children </p>
          <button> Action </button>
        </Greet>
      <Greet name = "Richaraj">
      </Greet>

      <Welcome name = "Raj" heroname = "BAtman">
        <p> Child </p>
      </Welcome>
      <Welcome name = "Richa"  heroname = "BAtman"> 
          <p> Children </p>
          <button> Action </button>
      </Welcome>
      <Welcome name = "Richaraj">
      </Welcome>
      {/* <Hello />
      <Hello />
      <Hello /> */}
    </div>
  );
}

export default App;
