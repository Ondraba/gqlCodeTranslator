import React from "react";
import withData from "../lib/withData";
import FullPageTemplate from "../universal/components/layout/fullPageTemplate";
import AddPhraseContainer from "../universal/components/addPhraseContainer";
import Phrases from "../universal/components/phrases";
import EraseButton from "../universal/components/eraseButton";

const Index = props => {
  return (
    <FullPageTemplate>
       <AddPhraseContainer {...props} />
       <Phrases />
    </FullPageTemplate>
  );
};

export default withData(Index);