import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '~/state/configureStore';
import Layout from '~/components/Layout';
import '~/theme/base.scss';

let appContainer = document.querySelector('.App');
let globalStore = configureStore();

let Root = ({store}) => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

render(<Root store={globalStore}/>, appContainer);
