import { Switch, Route } from "react-router-dom";
import { Login } from "../components/Login/index.tsx";
import Dashboard from "../components/Dashboard/index.tsx";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
