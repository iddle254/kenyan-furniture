
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import Home from './pages/home/homepage.page';
import RefundPolicy from './pages/refundpolicy/refundpolicy.page';
import PrivacyPolicy from './pages/privacypolicy/privacypolicy.page';
import TermsOfService from './pages/termsofservice/termsofservice.page';
import ShopPage from './pages/shoppage/shoppage.page';
import PageNotFound from './pages/pagenotfound/pagenotfound.page';
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import store from './redux/store';
// others

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/category/:id" component={ShopPage}/>
    <Route exact path="/refundPolicy" component={RefundPolicy}/>
    <Route exact path="/privacyPolicy" component={PrivacyPolicy}/>
    <Route exact path="/termsOfService" component={TermsOfService}/>
    <Route exact path="/404" component={PageNotFound}/>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
