import { useState } from 'react';
import './index.css';

function App() {

  const [status, setStatus] = useState(false);

  function changeState(){
    setStatus(!status);
  }

  return (
    <div className="App">
  <div className="container">
    <div className="left">
      <h3 className={status? "show left" : "dontShow"}>A</h3>
    </div>
    <div className="middle">
      <h3 className={status? "show up" : "dontShow"}>B</h3>
      <div className="circle" onClick={changeState}></div>
      <h3 className={status? "show down" : "dontShow"}>C</h3>
    </div>
    <div className="right">
      <h3 className={status? "show right" : "dontShow"}>D</h3>
    </div>
  </div>
    </div>
  );
}

export default App;
