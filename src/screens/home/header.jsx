//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Appcolors} from '../../theme/appcolors';
import AntDesign from 'react-native-vector-icons/AntDesign';
// create a component
const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Location</Text>
        <Text>Bilzen, Tanjungbalai</Text>
      </View>
      <View>
        <TextInput>
          <AntDesign name="search" size={20} color={Appcolors.lightgray} />
        </TextInput>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%',
    backgroundColor: Appcolors.black,
    elevation: 5,
    color: Appcolors.white,
  },
});

//make this component available to the app
export default Header;
