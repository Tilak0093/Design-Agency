import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Bootstrap (CSS first, then JS bundle)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css"; // your styles after Bootstrap

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
