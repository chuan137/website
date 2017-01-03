import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './App';
import HomePage from './HomePage';
import SupportPage from './SupportPage';
import NotFoundPage from './NotFoundPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="support.html" component={SupportPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);