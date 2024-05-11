import App from "./App";
import React, {StrictMode} from "react";
import ReactDOM from "react-dom";

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
