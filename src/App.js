import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HashCode from "./Pages/HashCode";
import Gradients from "./Pages/Gradients";
import TwoColorCombination from "./Pages/TwoColorCombination";
import Error from "./Pages/Error";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <title>Explore Hash &amp; RGB Colors | Your Ultimate Guide</title>
        <meta property="og:title" content="Hash & RGB Colors: Your Color Resource | RGB Color Picker" />
        <meta property="og:description" content="Explore our collection of hash and RGB colors. Simply click on any color to copy its code instantly. Discover the perfect color for your projects with ease. Start creating stunning designs now! | RGB color codes, HTML color picker, Color conversion" />
        <meta property="og:image" content="color-picker.png" />
      </Helmet>
      <HashRouter>
        <Switch>
          <Route path="/Gradients" exact component={Gradients} />
          <Route path="/hash-colors" exact component={HashCode} />
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
