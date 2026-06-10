import React, { useContext } from 'react'
import MyContext from './MyContext'

const GreateGrandChild = () => {
    const [msg,age] = useContext(MyContext);
  return (
    <div>GreateGrandChild
        <h3>Greate Grand Child Components -{msg}- age is {age}</h3>
        
    </div>
  )
}

export default GreateGrandChild