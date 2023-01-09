import React from 'react';
import * as ReactDOM from "react-dom/client";
import { register } from "react-to-html-element";
import ButtonsOnHover from "./ButtonsOnHover";

register(ButtonsOnHover, 'buttons-on-hover', React, ReactDOM);

function App() {
  return (
      <buttons-on-hover 
        change-attribute="lang" 
        change-tag="zero-md"  
        values-per-button="en,ua,ru" 
        default="en"
      />
  );
}

export default App;
