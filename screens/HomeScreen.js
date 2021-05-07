import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) =>{
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <Text>HomeScreen</Text>
          <Button
            title="Go to Details Screen"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
    );
  };
  
export default HomeScreen;
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
});