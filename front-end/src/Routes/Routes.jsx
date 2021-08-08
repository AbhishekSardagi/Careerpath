import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "../Components/Homepage/Home";
import { StageOne } from "../Components/StageOne/StageOne";
import { SingleCourse } from "../Components/SingleCourse/SingleCourse";
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stageone" component={StageOne} />
        <Route path="/stageone/singlecourse" component={SingleCourse} />
      </Switch>
    </div>
  );
};

export { Routes };
