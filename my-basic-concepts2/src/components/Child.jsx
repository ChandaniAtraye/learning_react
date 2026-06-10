import React from 'react'
import GrandChild from './GrandChild'

const Child = ({message}) => {
  return (
    <div>Child
        <GrandChild message={message}/>

    </div>
  )
}

export default Child