import React from 'react'

function ButtonComponent({operator, value, label, addNumber}) {
  return (
    <button onClick={() => addNumber(value)} value={value} className={`${operator ? "operator" : "number"}`}>
      {label}
    </button>
  )
}

export default ButtonComponent
