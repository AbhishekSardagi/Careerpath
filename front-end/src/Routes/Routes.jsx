import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Home } from "../Components/Homepage/Home";
import { Login } from "../Components/Login/Login";
import { SearchPage } from "../Components/SearchPage/SearchPage";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/searchpage" component={SearchPage} />
      </Switch>
    </div>
  );
};

export { Routes };
