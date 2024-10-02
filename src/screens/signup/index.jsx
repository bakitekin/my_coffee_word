//import liraries
import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput} from 'react-native';
import {Appcolors} from '../../theme/appcolors';

// create a component
const SignUp = () => {
  return (
    <ImageBackground
      source={require('../../assets/Image-1.png')}
      style={styles.backgroundImage}>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to My Coffe Word</Text>
        <View>
          <TextInput
            placeholder="Username"
            placeholderTextColor={Appcolors.white}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor={Appcolors.white}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor={Appcolors.white}
            style={styles.textInput}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

// define your styles
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 350,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

//make this component available to the app
export default SignUp;
