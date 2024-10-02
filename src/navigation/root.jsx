// Import libraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HOME,
  LOGIN,
  PROFILE,
  SIGNUP,
  FAVORİTE,
  NOTİFİCATİON,
  SETTINGS,
  CART,
  CARTDETAİL,
  MAP,
  ORDER,
} from '../router/router';
import store from '../store/store';
import {Provider} from 'react-redux';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Notifications from '../screens/notification';
import Cart from '../screens/cart';
import CartDetail from '../screens/cartDetail';
import Map from '../screens/map';
import Order from '../screens/order';
import Settings from '../screens/settings';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Favorite from '../screens/favorite';
import {STARTED} from '../router/router';
import Started from '../screens/started';

const Stack = createNativeStackNavigator();

// Create a component
const Root = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={HOME}>
          <Stack.Screen name={STARTED} component={Started} />
          <Stack.Screen name={LOGIN} component={Login} />
          <Stack.Screen name={SIGNUP} component={SignUp} />
          <Stack.Screen name={HOME} component={Home} />
          <Stack.Screen name={PROFILE} component={Profile} />
          <Stack.Screen name={FAVORİTE} component={Favorite} />
          <Stack.Screen name={NOTİFİCATİON} component={Notifications} />
          <Stack.Screen name={SETTINGS} component={Settings} />
          <Stack.Screen name={CART} component={Cart} />
          <Stack.Screen name={CARTDETAİL} component={CartDetail} />
          <Stack.Screen name={MAP} component={Map} />
          <Stack.Screen name={ORDER} component={Order} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

// Make this component available to the app
export default Root;
