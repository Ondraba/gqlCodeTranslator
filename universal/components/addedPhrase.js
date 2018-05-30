import React from "react";
import Phrase from "./phrase";

export default ({newestPhrase, newestTranslation, _id}) => (
  <div>
    <Phrase phrase = { newestPhrase } translation = { newestTranslation } _id = { _id } />
  </div>
);
