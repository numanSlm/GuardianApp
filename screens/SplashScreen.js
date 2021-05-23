import * as React from 'react';
import {View,Text,TouchableOpacity,Dimensions,StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
        animation='bounceIn'
        durataion='1500'
        source={require('../assets/guard.jpg')}
        style={styles.logo}
        resizeMode='stretch'
        />
      </View> 
      <Animatable.View
        animation='fadeInUpBig'
       style={styles.footer}>
        <Text style={styles.title}>Stay Connected with Everyone!!</Text>
        <Text style={styles.text}>Sign In with Account</Text>
        <View style={styles.button}>
        <TouchableOpacity 
            onPress={()=>navigation.navigate('SignInScreen')}
            style={[styles.signIn, {
                backgroundColor: '#009387',
                borderColor: '#009387',
                borderWidth: 1,
                marginTop: 15
            }]}
        >
              <Text style={styles.textSign}>Get started</Text>
              <MaterialIcons name="navigate-next" size={24} color="#fff" />
              
        </TouchableOpacity>
        </View>
      </Animatable.View> 
    </View>
  );
}

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.40;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      borderRadius: 500,

  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: '#fff',
      fontWeight: 'bold',
  }
});