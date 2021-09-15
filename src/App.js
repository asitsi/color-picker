import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HashCode from "./Pages/HashCode";
import Gradients from "./Pages/Gradients";
import TwoColorCombination from "./Pages/TwoColorCombination";
import Error from "./Pages/Error";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/Gradients" exact component={Gradients} />
          <Route path="/" exact component={HashCode} />
          <Route
            path="/TwoColorCombination"
            exact
            component={TwoColorCombination}
          />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
