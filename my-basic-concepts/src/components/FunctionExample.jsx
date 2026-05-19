// const FunctionExample = () =>{
//     function getName(){
//         return "yogesh";
//     }

//     return (
//         <>
//         <h1> hello function example 1</h1>
//         <h2> hi{getName()} </h2>
//         </>
//     )
// };

// const FunctionExample =() =>{
//     const getName =(yourname)=>{
//         return yourname;
//     }
//     const name ="Mayuri";
//     const name2 ="Chandani";
//     return(
//         <>
//         <h1> Using prameterized function</h1>
//         <h2> hello my name is {getName(name)}</h2>
//         <h2> hello my name is {getName(name2)}</h2>
//         <h2> hello my name is {getName("Anand")}</h2>
//         </>
//     )
// }
const FunctionExample = ()=>{
    const add = (a,b)=>{
        return a+b;
    }
    return(
        <>
        <div className="container">
            <h1>Addition Example</h1>
            <h2>10 + 20 = {add(10,20)}</h2>
            <h2>40 + 50 = {add(40,50)}</h2>

        </div>
        </>
    )
}
export default FunctionExample