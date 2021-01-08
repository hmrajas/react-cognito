import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/scss/paper-kit.scss?v=1.2.0";
import "../src/assets/demo/demo.css?v=1.2.0";

import registerServiceWorker from "./registerServiceWorker";
import './index.css';
import "@blueprintjs/core/lib/css/blueprint.css";

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
