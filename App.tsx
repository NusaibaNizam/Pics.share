import 'react-native-gesture-handler'
import React from 'react';
import { Provider } from 'react-redux';
import {MyStore} from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login/login';
import NavigatinTab from './src/components/NavigationTab/navigationTab';
import { navigationRef } from './navigationhelper'
import LogOut from './src/components/Logout/logout';
const Stack=createStackNavigator();

export default function App() {
  return(
    <NavigationContainer ref={navigationRef}> 
      <Provider store={MyStore}>
      <Stack.Navigator>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen 
            name='Home' 
            component={NavigatinTab}
            options={{
              headerLeft:()=> null,
              headerRight: ()=>(
                  <LogOut/>              
              )
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
