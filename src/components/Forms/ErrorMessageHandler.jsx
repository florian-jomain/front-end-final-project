import React from 'react'

const ErrorHandler = ({ messages }) => {
  if (messages.length === 1) {
    return <div className="error__warnings">{messages[0]}</div>
  } else {
    return (
      <div className="error__warnings">
        <ul>
          {messages.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ErrorHandler
