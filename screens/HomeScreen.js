import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import { FAB } from 'react-native-paper';

const HomeScreen = ({navigation}) =>{
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <Text>HomeScreen</Text>
          <Button
            title="Go to Details Screen"
            onPress={() => navigation.navigate('Details')}
          />
          <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => navigation.navigate('Map')}
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
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
});
