const Events_Example =()=>{
    const showMessage = () =>{
        alert("Button was Clicked");
    }
    const showyourmsg2 =()=>{
        alert("Hello my name is :"+name3)
    }
    const handleInput =(event) =>{
        console.clear();
        console.log("value:" + event.target.value);
    }
    const handleMouseOver = ()=>console.log("Mouse is Hover on Text");
    const handleDClick = () =>console.log("Mouse is Hover on Text");
    return(
        <>
        <h1> Arrow function Event Example</h1>
        <div className="container">
            <button className="btn btn-primary" onClick={()=>alert("Hello Welcome")}> On Click Inline </button>
        </div>
        <hr/>

        <h1>On click Function Calling</h1>
        <div className="container">
            <button className="btn btn-primary" onClick={showMessage}> On Click function call </button>
        </div>
        <hr/>

        <div className="container">
            <h1>parameterized function </h1>
            <button className="btn btn-primary" onClick={()=>showyourmsg2("Chandani")}> On Click function call </button>
        </div>
        <hr/>
        <div className="container">
            <input type="text" onChange={handleInput} placeholder=""/>
        </div>
        <hr/>
        <div className="container">
            <p onMouseOver={handleMouseOver}onDoubleClick={handleDClick}> On mouse hover Text </p>
        </div>

        </>
        
    )
};
export default Events_Example