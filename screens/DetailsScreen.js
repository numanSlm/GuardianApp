import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { FAB } from 'react-native-paper';

const DetailsScreen = ({navigation}) =>{
    return(
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
              <Text>HomeScreen</Text>
              <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => navigation.navigate('Map')}
              />
            </View>
    );
  };
  
export default DetailsScreen;
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
