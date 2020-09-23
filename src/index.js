
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import App from './App';

import {store, persistor} from './redux/store';
// others

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  {/* <PersistGate persistor={persistor}> */}
    <App/>
    {/* </PersistGate> */}
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();