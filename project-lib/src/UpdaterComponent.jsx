// updater function = A function passed as an argunement to setState() usually
//                    ex. setYear(year + 1), usually instead used setYear(arrow function)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions

import React, {useState} from 'react';

function UpdaterComponent(){

    const [count, setCount] = useState(0);

    function increment(){
        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order.

        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    return(
        <div>
            <p>Count: {count} </p>
            <button onClick={increment}>Increment</button>
        </div>
    ); 
}
export default UpdaterComponent