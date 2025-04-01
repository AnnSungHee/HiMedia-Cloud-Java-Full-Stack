import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './components/counterSlice';

function App() {
    // Redux 상태에서 count 값 가져오기
    const count = useSelector((state) => state.counter.count);
    // 액션 디스패치를 위한 함수
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <button onClick={()=> dispatch(incrementByAmount(5))}>Increment By 5</button>
        </div>
    );
}
export default App;