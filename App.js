import React, { Fragment } from 'react';
import {Provider} from 'react-redux';
import Root from './src/app/root';
import configureStore from './src/app/store';

let store = configureStore()

export default function App(){
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}