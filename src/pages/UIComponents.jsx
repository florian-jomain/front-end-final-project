import React from "react";
import Button from "../components/UI/Button";

const UIComponents = (props) => {
  return (
    <React.Fragment>
      <div>
        <h1>A page to display our UI components</h1>
        <Button type="Primary">Primary Button</Button>
        <Button type="Secondary">Secondary Button</Button>
      </div>
    </React.Fragment>
  );
};

export default UIComponents;
