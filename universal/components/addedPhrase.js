import React from "react";
import Phrase from "./phrase";

export default ({newestPhrase, newestTranslation}) => (
  <div>
    <Phrase phrase = { newestPhrase } translation = { newestTranslation } />
  </div>
);
