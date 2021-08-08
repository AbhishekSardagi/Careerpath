import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "../Components/Homepage/Home";
import { StageOne } from "../Components/StageOne/StageOne";
import { SingleCourse } from "../Components/SingleCourse/SingleCourse";
import { Engineer } from "../Components/Engineer/Engineer";
import { YourPath } from "../Components/YourPath/YourPath";
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stageone" component={StageOne} />
        <Route exact path="/stageone/singlecourse" component={SingleCourse} />
        <Route exact path="/stageone/singlecourse/eng" component={Engineer} />
        <Route
          path="/stageone/singlecourse/eng/yourpath"
          component={YourPath}
        />
      </Switch>
    </div>
  );
};

export { Routes };
