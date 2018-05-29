import React from "react";
import EraseButton from "./eraseButton";

export default ({ phrase, translation, _id }) => (
  <div
    style={{
      fontSize: 14,
      padding: "10px",
      backgroundColor: "#f2f2f2",
      width: "600px",
      marginBottom: "40px",
      marginTop: "40px"
    }}
  >
     <div 
        style = {{
            fontWeight: "bold"
        }}
     > 
           { phrase } 
     </div>
     <div> { translation } </div>
     <div 
        style = {{
            fontWeight: "bold",
            marginTop: "10px"
        }}
     > 
          <EraseButton _id = { _id } /> 
     </div>
  </div>
);
