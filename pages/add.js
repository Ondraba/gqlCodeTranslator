import React from "react";
import withData from "../lib/withData";
import FullPageTemplate from "../universal/components/layout/fullPageTemplate";
import AddPhraseContainer from "../universal/components/addPhraseContainer";

const Add = props => {
  return (
    <FullPageTemplate>
       <AddPhraseContainer {...props} />
    </FullPageTemplate>
  );
};

export default withData(Add);