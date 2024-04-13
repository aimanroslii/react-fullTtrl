import React, {useState, useEffect, useRef} from 'react';

function ComponentE(){

    // let [number, setNumber] = useState(0);

    // const ref = useRef(0);
    const inputref = useRef(null);


    useEffect(() => {
        console.log("COMPONENT RENDERED");
        console.log(inputref);
    });

    function handleClick(){
        // ref.current = ref.current + 1;
        // console.log(ref.current);
        inputref.current.focus();
        inputref.current.style.backgroundColor = "yellow";
    }

    return(
        <div>
            <button onClick={handleClick}>
                Click me!
            </button>
            <input ref={inputref}/>
        </div>
);

}
export default ComponentE;