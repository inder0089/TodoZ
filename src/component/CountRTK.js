import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset,counterAmount } from '../utiles/countSlice';

 const CountRTK = () => {
    const count = useSelector((state) => state.counter.count);
    console.log("count",count)

    const dispatch = useDispatch()


    const [userInput, setUserInput] = useState("")

        const handleInput = (e) =>{
            const {value} = e.target;
            dispatch(counterAmount(+value))
        }

  return (
    <>
    <div>CountRTK</div>

    <input type='number' value={count}  onChange={handleInput} />

        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())} disabled={count === 0}>decrement</button>
        <button onClick={()=>dispatch(reset())}>reset</button>

        </>


  )
}
export default  CountRTK;
