import React from 'react'
import useToggle from '../hooks/useToggle'

const Light = () => {
    const {isOn,toggle} = useToggle();
  return (
    <div className="p-2 mt-2 border border-rounded w-50">
        <h2>Light</h2>
        <h3>{isOn ? "ON" : "OFF"}</h3>
        <button onClick={toggle}>{isOn ? "Turn Off" : "Turn On"}</button>
    </div>
  )
};

export default Light