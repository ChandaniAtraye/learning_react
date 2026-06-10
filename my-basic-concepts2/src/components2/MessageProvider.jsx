import React from 'react'
import MyContext from './MyContext'

const MessageProvider = ({children}) => {
    const message = "Hello Students....!!!"
    const age =12;
  return (
    <div>MessageProvider
        <MyContext.Provider value={[message,age]}>
          {children}
        </MyContext.Provider>
    </div>
  )
}

export default MessageProvider