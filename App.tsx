
import React from 'react';
import ManiComponent from './src/mainComponent';
import { Provider } from 'react-redux';
import Store from './src/redux/store';
export default function App() {
  return(
    <Provider store={Store}>
      <ManiComponent/>
    </Provider>
  );
}
