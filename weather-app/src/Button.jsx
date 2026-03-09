import React from 'react'

const Button = ({ onClick, text }) => {
  return (
    <div className="button-container">
        <button className="border-2 border-white rounded-md px-4 py-2 cursor-pointer hover:bg-blue-200"
         onClick={onClick}>
          {text}
          </button>
    </div>

  )
}

export default Button