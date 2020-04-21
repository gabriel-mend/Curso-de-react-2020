import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState()
  const [secondNum, setSecondNum] = useState()
  const [result, setResult] = useState()
  
  /*const [state, setState] = useState({
    num: 0,
    secondNum: 0,
    result: 0
  })*/
  const Sum = () => {
    const numberInt = parseInt(num)
    const secondNumberInt = parseInt(secondNum)

    setResult(numberInt + secondNumberInt)
  }

  return (
    <div className="App">

      Number 1:<br/>
      <input 
        type="text" 
        value={num} 
        onChange={e => setNum(e.target.value)}/><br/>

      Number 2:<br/>
      <input 
        type="text" 
        value={secondNum} 
        onChange={e => setSecondNum(e.target.value)}/><br/>

      <button onClick={Sum}>Somar</button><br/>

      Result:<br/>
      <input type="text" value={result}/><br/>
    </div>
  );
}

export default App;
