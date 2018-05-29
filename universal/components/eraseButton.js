import React from "react";
import { graphql } from "react-apollo";

import query from "../../queries/phrases";
import gql from "graphql-tag";

const EraseButton = props => {
  const { _id } = props;

  const onRemoveClick = (_id) => {
    console.log(_id)
    event.preventDefault();
    props.mutate({
      variables: {
       _id: _id
      }
    })
  }

  return(
    <div
      style={{
        fontSize: 14,
        fontWeight: "bold",
        color: "red"
      }}
    > 
      <button onClick={() => onRemoveClick(_id)}>X</button>
    </div>
  );
}


const mutation = gql`
    mutation DeletePhrase($_id: ID){
        deletePhrase(_id: $_id){
            _id
        }
    }
`;

export default graphql(mutation)(EraseButton);