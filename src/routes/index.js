import { Switch, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Register2 } from "../pages/Register2";
import { Register3 } from "../pages/Register3";

const Routes = () => (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" exact component={Register} />
      <Route path="/register2" exact component={Register2} />
      <Route path="/register3" exact component={Register3} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
);

export default Routes;
