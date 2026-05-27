// const StudentProps = (props) =>{
//     return(
//         <>
//         <div className="border border-black p-5 m-4"> 
//             <h3>Name : {props.name}</h3>
//             <h3>Age : {props.age}</h3>
//             <h3>City : {props.city}</h3>
//         </div>
//         </>
//     )
// };
// export default StudentProps


const StudentProps = ({ name, age, city }) => {
    return (
        <>
            <div className="border border-black p-5 m-4">
                <h3>Name : {name}</h3>
                <h3>Age : {age}</h3>
                <h3>City : {city}</h3>
            </div>
        </>
    )
};
const PassingBoolean = ({ isAdmin }) => {
    return (
        <>
            <h2>Passing boolean as props</h2>
            <h2>{isAdmin ? "Welcome Admin" : "Welcome User"}</h2>
        </>
    )
};
const PassingObject = ({ info }) => {
    return (
        <div>
           
            <div className="border border-black p-5 m-4">
                <h3>Name : {info.name}</h3>
                <h3>Age : {info.age}</h3>
                <h3>City : {info.city}</h3>
            </div>
        </div>
    )

};
const PassingArray = ({list}) =>{
    return(
        <>
        <ul>
            {list.map((item,index) =>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        </>
    )
};
const PassingFunction =({clickMe}) =>(
    <button onClick={clickMe}>Click Me</button>
);
const PassingImage =({photo}) => <img className="img-fluid" src={photo} width="400"/>;
export { StudentProps, PassingBoolean, PassingObject,PassingArray,PassingFunction,PassingImage }