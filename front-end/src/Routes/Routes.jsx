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
      <Router>
        <AuthProvider>
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
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export { Routes };
