import React, {Suspense, lazy} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';


import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';

const Home = lazy(() => import('./pages/home/homepage.page'));
const RefundPolicy = lazy(() => import('./pages/privacypolicy/privacypolicy.page'));
const PrivacyPolicy = lazy(() => import('./pages/home/homepage.page'));
const TermsOfService = lazy(() => import('./pages/termsofservice/termsofservice.page'));
const ShopPage = lazy(() => import('./pages/shoppage/shoppage.page'));
const PageNotFound = lazy(() => import('./pages/pagenotfound/pagenotfound.page'));


function App() {
  return (
    <div className="App">
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
          <Route exact path="/index" component={Home}/>
    <Route exact path="/category/:id" component={ShopPage}/>
    <Route exact path="/refundPolicy" component={RefundPolicy}/>
    <Route exact path="/privacyPolicy" component={PrivacyPolicy}/>
    <Route exact path="/termsOfService" component={TermsOfService}/>
    <Route exact path="/404" component={PageNotFound}/>
      {/* <Route path="/index" render={(props) => <Index {...props} />} /> */}
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
          </Suspense>
        </ErrorBoundary>
    
    </Switch>
      
    </div>
  );
}

export default App;
