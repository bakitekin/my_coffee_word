// Import libraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Appcolors} from '../../theme/appcolors';

// Create a component
const Started = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Image-1.png')}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}>
        <LinearGradient
          colors={['black', 'transparent']}
          style={styles.gradient}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}>
          <View style={styles.content}>
            <Text style={styles.textBold}>
              Fall in Love with Coffee in Blissful Delight!
            </Text>
            <Text style={styles.text}>
              Welcome to our cozy coffee corner, where every cup is a delightful
              for you.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    alignContent: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  textBold: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: Appcolors.lightgray,
    marginTop: 30,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    backgroundColor: Appcolors.primary,
    marginBottom: 60,
    paddingVertical: 20,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Appcolors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

// Make this component available to the app
export default Started;
