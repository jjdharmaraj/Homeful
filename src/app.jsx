import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import configureStore from '~/state/configureStore';
import HomePage from '~/components/HomePage';
import CampList from '~/components/CampList';
import '~/theme/base.scss';

let appContainer = document.querySelector('.App');
let globalStore = configureStore();

render(
  <Provider store={globalStore}>
    <Router history={hashHistory}>
      <Route path="/" component={HomePage} />
      <Route path="/camp-list" component={CampList} />
    </Router>
  </Provider>
, appContainer);
