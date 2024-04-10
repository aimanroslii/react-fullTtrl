//useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//              This component re-renders
//              This component mounts
//              The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})            //Runs after every re-render
// 2. useEffect(() => {}, [])        //Runs only on mount
// 3. useEffect(() => {}, [value])   //Runs on mount + when value changes

//USES
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts


//Benefits of using useEffect
// - Code will be more organize
// - Improve debugging processs
// - Can perform some cleanup code

import React, {useState, useEffect} from 'react';

function Effect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // useEffect(()=> {
    //     document.title = `Count: ${count}`;
    // });

    // useEffect(()=> {
    //     document.title = `Count: ${count}`;
    // }, []);  //one time and done effect

    // useEffect(()=>{
    //     document.title = `Count: ${count} ${color}`;
    // }, [count, color]);

    // function addCount(){
    //     setCount(c => c + 1);
    // }

    // function subtractCount(){
    //     setCount(c => c - 1);
    // }

    // function changeColor(){
    //     setColor(c => c === "green" ? "red" : "green");
    // }

    useEffect(()=> {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Remove");
        }
    }, []);

    useEffect(() => {
        document.title = `Size ${width} x ${height}`;
    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <div>
            {/* <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button> */}

            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </div>
    );

}
export default Effect
