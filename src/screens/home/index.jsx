//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Appcolors} from '../../theme/appcolors';
import Header from './header';

// create a component
const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
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
export default Home;
