import React from "react";
import { graphql } from "react-apollo";

import { branch, compose, renderComponent } from 'recompose';
import { RenderWhileLoading } from "./helpers/renderWhileLoading";
import { RenderWhileError } from "./helpers/renderWhileError";

import query from "../../queries/phrases";

const Phrases = props => {
  const { phrases } = props.data;

  return (
    <div style={styles}>
     {phrases.map(phrase => (
       <div style={styles.phrase}>
        <div>{phrase.phrase}</div>
        <div>{phrase.translation}</div>
       </div>
      ))}
    </div>
  );
};

const styles = {
  marginTop: "40px",
  phrase: {
      marginTop:"20px"
  }
}

const data = graphql(query);

export default compose(
  data,
  RenderWhileLoading("data"),
  RenderWhileError("data")
)(Phrases);