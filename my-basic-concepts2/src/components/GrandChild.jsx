import React from 'react'
import GreateGrandChild from './GreateGrandChild'

const GrandChild = ({message}) => {
  return (
    <div>GrandChild
        <GreateGrandChild message={message}/>
    </div>
    
  )
}

export default GrandChild