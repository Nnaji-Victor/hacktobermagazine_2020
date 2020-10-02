import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "../../components/Loading";

const Home = lazy(() => import("../../containers/Home"));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Suspense>
);

export default App;
