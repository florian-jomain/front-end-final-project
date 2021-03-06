import React from "react";

function ButtonPrimary(props) {
  let buttonClass = "secondaryButton";
  switch (props.type) {
    case "primary":
      buttonClass = "primaryButton";
      break;
    case "secondary":
      buttonClass = "secondaryButton";
      break;
    case "tertiary":
      buttonClass = "tertiaryButton";
      break;
    default:
      break;
  }

  return (
    <React.Fragment>
      <button className={buttonClass}>{props.children}</button>
    </React.Fragment>
  );
}

export default ButtonPrimary;
