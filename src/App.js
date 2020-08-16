import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home/homepage.page';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route exact path="/store" component={ShopPage}/>
        <Route exact path="/refundpolicy" component={RefundPolicy}/>
        <Route exact path="/termsofservice" component={TermsOfService}/>
        <Route exact path="/privacypolicy" component={PrivacyPolicy}/>
        <Route exact path="/pagenotfound" component={PageNotFound}/>         */}
      </Switch></BrowserRouter>
      
    </div>
  );
}

export default App;
