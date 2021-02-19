import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import App from "./App";
import Providers from "./providers/Providers";
import "./index.less";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
} else {
  Sentry.init({ dsn: "https://db441fa696d940bbad301593197ddfe8@sentry.gc.nav.no/70" });
}

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("podlet-dittnav-meldinger")
);
