import React, {useState, useEffect} from "react";


function Counter(props){
    const {title} = props
    const [count, setCount] = useState(0)
    useEffect(()=>{
      console.log('Mounting...')
      console.log('Updating...'+count)
      return (()=>{
        // console.log('UnMounting...')
        console.log('Clean Up ... '+count);
      })
    },[count])
    const addCount=()=>{
        setCount(count+1)
        console.log(count);
      }
      const minsCount = () =>{
        setCount(count-1)
      }
    return (
        <>
            <h3>{title}: {count}</h3>
            <button onClick={addCount}>Increment</button>
            <button onClick={minsCount}>Decrement</button>
        </>
    )
}

export default Counter;