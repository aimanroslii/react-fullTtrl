
function Button(){
    // const handleClick = () => console.log("OUCH!");
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    // let count = 0;  

    // const handleClick3 = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // }

    const handleClick = (e) => e.target.textContent = "OUCH!";
    // const handleClick = (e) => console.log(e);


    return(
        // <button onClick={() => handleClick2("John Wick")}>Click me</button>
        // <button onClick={()=> handleClick3("John Wick")}>Click me</button>
        //<button onClick={(e)=> handleClick(e)}>Click me</button>
        <button onDoubleClick={(e)=> handleClick(e)}>Click me</button>
    );
}

export default Button