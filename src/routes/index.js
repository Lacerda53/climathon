import { Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Register } from "../pages/Register";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register" exact component={Register} />
  </Switch>
);

export default Routes;
