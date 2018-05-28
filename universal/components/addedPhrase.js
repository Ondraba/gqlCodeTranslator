import React from "react";

export default ({newestPhrase, newestTranslation}) => (
  <div
    style={{
      fontSize: 14,
      fontWeight: "bold",
      color: "red"
    }}
  >
     <div> { newestPhrase } </div>
     <div> { newestTranslation } </div>
  </div>
);
