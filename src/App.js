import A from './comp/a'
import B from './comp/b'
import C from './comp/c'
import D from './comp/d'
import Notestate from './Context/Notestate'
import React, { useState } from 'react';
function App() {
  const [counter,setCounter] = useState(0);
  const increment = () =>{
    setCounter(counter + 1 );
  };
  const decrement = () =>{
    setCounter(counter - 1 );
  };

  return(
    <>
    <Notestate>
       {/* <div className='d-flex justify-content-center mt-5'>
        <div class="d-grid gap-2 d-md-block">
        <button onClick={increment} type="button" class="btn btn-primary">+</button>
        <button type="button" class="btn btn-warning">{counter}</button>
        <button onClick={decrement} type="button" class="btn btn-primary">-</button>
        </div>
      </div> */}
      <div className='d-flex justify-content-center mt-5'>
        <A/><B/><C/><D/>
      </div>   
    </Notestate>
    </>
  );
}
     
export default App;