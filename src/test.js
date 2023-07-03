import React from 'react';
import { increment,decrement } from './actions/counterActions';
import { useSelector,useDispatch } from 'react-redux';


function Test(props) {

    const counter = useSelector((state)=> state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {counter.value}</h1>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default Test;