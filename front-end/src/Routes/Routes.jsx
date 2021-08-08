import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "../Components/Homepage/Home";
import { StageOne } from "../Components/StageOne/StageOne";
import { SingleCourse } from "../Components/SingleCourse/SingleCourse";

import { Login1 } from "../Components/Login/Login1";
import { Signup1 } from "../Components/Signup/Signup1";
import ForgotPassword from "../Components/ForgotPassword/ForgotPassword";
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login">
        <Login1/>
    </Route>
    <Route exact path="/signup">
        <Signup1/>
    </Route>
    <Route exact path="/forgot-password">
    <ForgotPassword/>
</Route>
        <Route exact path="/stageone" component={StageOne} />
        <Route path="/stageone/singlecourse" component={SingleCourse} />
      </Switch>
    </div>
  );
};

export { Routes };
