import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ThemeContextWrapper from "./ThemeContextWrapper";

ReactDOM.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextWrapper>,
  document.getElementById("root")
);
