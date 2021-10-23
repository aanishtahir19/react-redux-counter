import './Counter.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {increment, decrement, incrementByAmount, decrementByAmount} from './counterSlice';
export function Counter() {
  const count = useSelector(state=> state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const checkDecrement = ()=>{
    if (count-1 >= 0){
      return dispatch(decrement())
    }
    
  }
  const checkAmountDecrement = ()=>{
    if(count-amount >=0){
      return dispatch(decrementByAmount(amount))
    }
  }

  return (
    <div className="counter">
      <div className="row-elements">
        <button
          className="incrementBtn"
          onClick={()=> dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          className="decrementBtn"
          onClick={()=> checkDecrement()}
        >
          -
        </button>
      </div>
      <div className="row-elements" style={{marginTop:20}}>
        <input 
          type="text" 
          name="inputIncrement" 
          id="InputChange"
          onChange={e=> setAmount(e.target.value)} 
        />
        <button className="addBtn"
          onClick={()=> dispatch(incrementByAmount(amount))}
        >
          Add Amount
        </button>
        <button className="subtractBtn"
        onClick={()=> checkAmountDecrement()}
        >
          Subtract Amount
        </button>
      </div>
    </div>
  )
}

