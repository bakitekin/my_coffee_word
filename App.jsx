//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Appcolors} from './src/theme/appcolors';
import Root from './src/navigation/root';

// create a component
const App = () => {
  return <Root />;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Appcolors.primary,
  },
});

//make this component available to the app
export default App;
