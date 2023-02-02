import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Accueil from "./views/Enchere/Accueil";
import Inscription from "./views/Enchere/Inscription";
import Login from "./views/Enchere/Login";
import Recharger from "./views/Enchere/Recharger";
import ListeEnchere from "./views/Enchere/ListeEnchere";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      {/*---------------Enchere------------*/}

      <Route
          path="/accueil"
          render={(props) => <Accueil {...props} />}
      />

      <Route
          path="/inscription"
          render={(props) => <Inscription {...props} />}
      />

      <Route
          path="/login"
          render={(props) => <Login {...props} />}
      />

      <Route
          path="/recharger"
          render={(props) => <Recharger {...props} />}
      />
      <Route
          path="/ListeEnchere"
          render={(props) => <ListeEnchere {...props} />}
      />

      <Redirect from="/" to="/accueil" />
    </Switch>
  </BrowserRouter>
);
