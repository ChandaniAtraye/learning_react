import { useState } from 'react'
import img1 from './assets/react.svg'
import img2 from './assets/vite.svg'
import FruitListArray from './components/Arraye_Example'
import ConditionalStatement from './components/ConditionalStatement'
import MessageProps from './components/MessageProps'
import  { StudentProps,PassingBoolean, PassingObject, PassingArray, PassingFunction, PassingImage } from './components/StudentsProps'
import CardProps from './components/CardProps'

// import FunctionExample from './components/FunctionExample'
// import Events_Example from './components/Events_Example'
// import UserCard from './components/ObjectExample'






function App() {
  const student ={name:"CA",age:24,city:"Pune"};
   const student2 ={name:"Cia",age:24,city:"Nashik"};
   const subjects = ["HTML","CSS","JS","REACT","NODE","MONGODB"]
   const showAlert =()=>{
    alert("Hello from parent");
   };


  return (
    <>
      {/* <FunctionExample/> */}
      {/* <Events_Example/> */}
      {/* <UserCard/> */}
      {/* <FruitListArray/> */}
      {/* <ConditionalStatement/> */}
      <div className="container">
        {/* <h2>Passing string as props</h2>
        <MessageProps text="Hello Students" />
        <MessageProps text="Welcome to react props" />
        <hr />
        <div className="container text-primary">
          <StudentProps name="CA" age={24} city="Pune" />
          <StudentProps name="karan" age={25} city="Mumbai" />
        </div>
        <hr/>
        <PassingBoolean isAdmin={true}/>
        <hr/>
        <h2>Passing object as props</h2>
        <PassingObject info={student}/>
        <PassingObject info={student2}/>

        <hr/>
        <h2> Passing Array as props</h2>
        <PassingArray list={subjects} />
        <hr/> */}
        <h2> Passing Function</h2>
        <PassingFunction clickMe={showAlert}/>
        <hr/>
        <PassingImage photo={img1}/>
        <PassingImage photo={img2}/>
      </div>
     


      {/* <div className="container">
        <div className="row g-3">
          <h2> Cards Example</h2>
          <CardProps card_title="HTML" description="HTML stands for hypertext markup language" />
          <CardProps card_title="CSS" description="CSS stands for Cascading style sheet" />
          <CardProps card_title="JS" description="Js stands for Javascript" />
        </div>
      </div> */}

     











    </>
  )
}

export default App
