import React from "react";

import query from "../../queries/phrases";

const EraseButton = props => (
  <div
    style={{
      fontSize: 14,
      fontWeight: "bold",
      color: "red"
    }}
  >
    <button>Erase All!</button>
  </div>
);


const mutation = gql`
  mutation EraseAll() {
    eraseAll() {
      _id
      phrase
      translation
    }
  }
`;

export default EraseButton;