import React from "react";
import Button from "../components/UI/Button";

const UIComponents = (props) => {
  return (
    <React.Fragment>
      <div>
        <h1>A page to display our UI components</h1>
        <Button type="primary">Primary Button</Button>
        <Button type="secondary">Secondary Button</Button>
        <Button type="tertiary">Tertiary Button</Button>
      </div>
    </React.Fragment>
  );
};

export default UIComponents;
