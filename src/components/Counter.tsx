import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment, incrementByAmount, incrementAsync } from '../store/reducers/counterReducer';
import { RootState } from '../store/store';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const [incrementAmount, setIncrementAmount] = useState('2');

  const dispatch = useDispatch();

  return (
    <div>

      <div>
        <button onClick={() => dispatch(increment())}>
          +
        </button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>

      <div>
        <input value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)}/>
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
          Add Async
        </button>
      </div>

    </div>
  );
}