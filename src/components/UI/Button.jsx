import React from 'react'

function ButtonPrimary(props) {
  let buttonClass = ""
  switch (props.type) {
    case "Primary":
      buttonClass = "primaryButton";
      break;
    case "Secondary":
      buttonClass = "secondaryButton";
      break;
    default:
      break;
  }
  return (
    <React.Fragment>
      <button className={buttonClass}>{props.children}</button>
    </React.Fragment>

  )
}

export default ButtonPrimary
