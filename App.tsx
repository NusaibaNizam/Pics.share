import 'react-native-gesture-handler'
import React from 'react';
import ManiComponent from './src/mainComponent';
import { Provider } from 'react-redux';
import {MyStore} from './src/redux/store';
export default function App() {
  return(
    <Provider store={MyStore}>
      <ManiComponent/>
    </Provider>
  );
}
