import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>Current count: {count}</p>
            <button type = "button" onClick={()=>setCount(count + 1)}>Increment</button>
            <button type = "button" onClick={()=>setCount(count - 1)}>Decrement</button>
            <button type = "button" onClick={()=>setCount(0)}>Reset</button>
        </div>
    );

}
export default Counter;