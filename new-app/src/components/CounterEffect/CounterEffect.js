import React, {useState} from "react";
import Counter from "../Counter/Counter";

function CounterEffect ( ){
    const [state, setState] = useState(false)
    return(
        <>
            <h1 onClick={()=>setState(!state)}>Show/hide</h1>
            { state && <Counter title='counter'/> }
        </>
    )
}

export default CounterEffect;