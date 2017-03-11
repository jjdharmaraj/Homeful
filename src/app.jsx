import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '~/state/configureStore';
import Layout from '~/components/Layout';
import '~/theme/base.scss';

let appContainer = document.querySelector('.App');
let globalStore = configureStore();

render(
  <Provider store={globalStore}>
    <Layout />
  </Provider>
, appContainer);
