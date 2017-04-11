import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Route, Router, browserHistory, IndexRoute} from "react-router";
import HomePage from "./containers/home/HomePage"
import SinglePage from "./containers/single/SinglePage"

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={HomePage}/>
          <Route path="package/*" component={SinglePage}/>
      </Route>

  </Router>,
  document.getElementById('root')
);
