import React from 'react';
import {View, Text, StyleSheet,Dimensions} from 'react-native';
import { FAB } from 'react-native-paper';
import MapView from 'react-native-maps';

const MapScreen = (navigation)=>{
    return(
        <View style={styles.container}>
            <MapView style={styles.map} />
            <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => navigation.navigate('Map')}
            />
        </View>
    );
};

export default MapScreen;

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
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
});
