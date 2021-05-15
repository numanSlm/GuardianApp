import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FAB } from 'react-native-paper';

const ExploreScreen = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Text>ExploreScreen</Text>
            <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => navigation.navigate('ReportScreen')}
            />
        </View>
    );
};

export default ExploreScreen;

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
