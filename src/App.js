import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Varslinger from "./pages/Varslinger/Varslinger";

const App = () => (
  <Router basename="/person">
    <ScrollToTop />
    <Switch>
      <Route path="/varslinger" exact component={Varslinger} />
    </Switch>
  </Router>
);

export default App;
