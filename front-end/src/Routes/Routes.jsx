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
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { StageOne } from "../Components/StageOne/StageOne";
const Routes = () => {
  return (
    <div>
      <Navbar />
      
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute
              exact
              path="/update-profile"
              component={UpdateProfile}
            />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route path="/stageone" component={StageOne} />
           <Switch/>
      <Footer />
    </div>
  );
};

export { Routes };
