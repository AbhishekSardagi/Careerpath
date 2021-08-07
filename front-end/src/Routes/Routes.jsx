import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Home } from "../Components/Homepage/Home";
import { Login } from "../Components/Login/Login";
import { SearchPage } from "../Components/SearchPage/SearchPage";
import Footer from "../Components/Footer/Footer";
import { SingleCourse } from "../Components/SingleCourse/SingleCourse";
import { StageOne } from "../Components/StageOne/StageOne";

import React from "react";
import Signup from "../Components/Signup/Signup";
import { AuthProvider } from "../Context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logout from "../Components/Logout/Logout";
import Login from "../Components/Login/Login";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import ForgotPassword from "../Components/ForgotPassword/ForgotPassword";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";
import { Home } from "../Components/Homepage/Home";
const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        {/* <Route exact path="/searchpage" component={SearchPage} /> */}
        <Route exact path="/stageone" component={StageOne} />
        <Route path="/stageone/singlecourse" component={SingleCourse} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
      </Switch>
      <Footer />
    </div>
  );
};

export { Routes };
