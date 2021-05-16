import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Card,Title,Button } from 'react-native-paper';

const ReportScreen = (props)=>{
    return(
        <View style={styles.container}>
            <Card style={styles.cases}>
              <Card.Title title="Emergency Report"  />
              <Card.Actions >
      
                <Button onPress={()=> {props.navigation.navigate('Home')}}>Cancel</Button>
                <Button onPress={()=> {props.navigation.navigate('Report')}}>Ok</Button>
              </Card.Actions>
            </Card>
            <Card style={styles.cases}>
              <Card.Title title="Normal Report"  />
              <Card.Actions>
                <Button onPress={()=> {props.navigation.navigate('Home')}}>Cancel</Button>
                <Button onPress={()=> {props.navigation.navigate('Report')}}>Ok</Button>
              </Card.Actions>
            </Card>
        </View>
    );
};

export default ReportScreen;

const styles= StyleSheet.create({
    container:{
        backgroundColor:"#ff6666",
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    cases:{
        flexDirection:"row",
        padding:8,
        marginTop:30,
        borderRadius:20,
        alignItems:"center",
        paddingHorizontal:10,
        marginHorizontal:10,
        height:130,
        width:250,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
      },
});