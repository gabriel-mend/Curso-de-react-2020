import React, { useState } from 'react';

import useStore from './sumReducer'

function ReducerHook() {
  const [num, setNum] = useState('')
  const [secondNum, setSecondNum] = useState('')
  const [store, dispatch] = useStore()

  const Sum = () => {
    const numberInt = parseInt(num)
    const secondNumberInt = parseInt(secondNum)

    console.log('dispachando a action')
    dispatch({
        type: 'SUM',
        payload: numberInt + secondNumberInt
    })
  } 
  const Sub = () => {
    const numberInt = parseInt(num)
    const secondNumberInt = parseInt(secondNum)

    console.log('dispachando a action')
    dispatch({
        type: 'SUB',
        payload: numberInt - secondNumberInt
    })
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
      <button onClick={Sub}>Subtrair</button><br/>

      Result:<br/>
      <input type="text" value={store.result} readOnly/><br/>
    </div>
  );
}

export default ReducerHook;
