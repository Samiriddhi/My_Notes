// React Props
// Props are arguments passed into React components.

// Props are passed to components via HTML attributes.

// props stands for properties.

// React Props are like function arguments in JavaScript and attributes in HTML.

// To send props into a component, use the same syntax as HTML attributes:

import React from "react";

function Props(prop) {
  return (
    <div>
      <h1>
        
        I am react and I am Library of <p style={{ color: "red" }}>{prop.library}</p>
         and I am widely used in
        industries these days because i am open source, easy to understand and
        Developed by faecbook
      </h1>
    </div>
  );
}

export default Props;
