import { useState } from 'react'
import reactLogo from './assets/react.svg'
import FruitListArray from './components/Arraye_Example'
import ConditionalStatement from './components/ConditionalStatement'
import MessageProps from './components/MessageProps'
import  { StudentProps,PassingBoolean } from './components/StudentsProps'
import CardProps from './components/CardProps'

// import FunctionExample from './components/FunctionExample'
// import Events_Example from './components/Events_Example'
// import UserCard from './components/ObjectExample'






function App() {


  return (
    <>
      {/* <FunctionExample/> */}
      {/* <Events_Example/> */}
      {/* <UserCard/> */}
      {/* <FruitListArray/> */}
      {/* <ConditionalStatement/> */}
      <div className="container">
        <h2>Passing string as props</h2>
        <MessageProps text="Hello Students" />
        <MessageProps text="Welcome to react props" />
        <hr />
        <div className="container text-primary">
          <StudentProps name="CA" age={24} city="Pune" />
          <StudentProps name="karan" age={25} city="Mumbai" />
        </div>
        <PassingBoolean isAdmin={true}/>
      </div>
      <hr />


      <div className="container">
        <div className="row g-3">
          <h2> Cards Example</h2>

          <CardProps card_title="HTML" description="HTML stands for hypertext markup language" />
          <CardProps card_title="CSS" description="CSS stands for Cascading style sheet" />
          <CardProps card_title="JS" description="Js stands for Javascript" />
        </div>
      </div>

      <hr />











    </>
  )
}

export default App
