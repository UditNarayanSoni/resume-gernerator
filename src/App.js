import React from "react";
import { Route, Switch } from "react-router-dom";
import { FormInput } from "./components";
import FormGenerated from "./FormGenerated";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={FormInput} />
        <Route path="/formgenerated" component={FormGenerated} exact />
      </Switch>
    </div>
  );
}

export default App;
