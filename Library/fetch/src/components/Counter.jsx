import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount } from '../features/counter/counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
      </div>
    </div>
  )
}
