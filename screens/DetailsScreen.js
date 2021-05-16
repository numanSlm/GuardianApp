import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import { FAB,Card } from 'react-native-paper';
import {Video} from 'expo-av';

const DetailsScreen = ({navigation}) =>{
    return(
      <View style={styles.container}>
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
        >
          
          <Text style={styles.heading}>
              The Benefits of Self-Defense Training :
            </Text>
            <Text style={styles.text}>The ability to defend yourself and your loved ones. Physical habits that create and maintain a healthier you.A Sharper mental focus
             A network of friends and colleagues.</Text>

            <Card style={styles.Titlecases}>
              <Text style={styles.heading}>
              Some common defense Tactics:
              </Text>
            </Card>

            <Card style={styles.cases}>
              <Card.Title title="Escape from side headlock"/>
              <Card.Content>
                <Video
                  source={require('../assets/Defense/Video2.mp4')} 
                  rate={1.0}
                  shouldPlay
                  isLooping
                  style={styles.video}
                />
              </Card.Content>
            </Card>
            <Card style={styles.cases}>
              <Card.Title title="Groin Kick"/>
              <Card.Content>
                <Video
                  source={require('../assets/Defense/Video3.mp4')} 
                  rate={1.0}
                  shouldPlay
                  isLooping
                  style={styles.video}
                />
              </Card.Content>
            </Card>
            <Card style={styles.cases}>
              <Card.Title title="Heel palm strike" />
              <Card.Content>
                <Video
                  source={require('../assets/Defense/Video4.mp4')} 
                  rate={1.0}
                  shouldPlay
                  isLooping
                  style={styles.video}
                />
              </Card.Content>
            </Card>
            <Card style={styles.cases}>
              <Card.Title title="Elbow strike"/>
              <Card.Content>
                <Video
                  source={require('../assets/Defense/Video5.mp4')} 
                  rate={1.0}
                  shouldPlay
                  isLooping
                  style={styles.video}
                />
              </Card.Content>
            </Card>
            <Card style={styles.cases}>
              <Card.Title title="Hammer strike"  />
              <Card.Content>
                <Video
                  source={require('../assets/Defense/Video6.mp4')} 
                  rate={1.0}
                  shouldPlay
                  isLooping
                  style={styles.video}
                />
              </Card.Content>
            </Card>
            <Card style={styles.cases}>
              <Card.Title title="Alternative elbow strike"/>
              <Card.Content>
                <Video
                  source={require('../assets/Defense/Video7.mp4')} 
                  rate={1.0}
                  shouldPlay
                  isLooping
                  style={styles.video}
                />
              </Card.Content>
            </Card>
            <Card style={styles.cases}>
              <Card.Title title="Hammer strike while swinging"  />
              <Card.Content>
                <Video
                  source={require('../assets/Defense/Video8.mp4')} 
                  rate={1.0}
                  shouldPlay
                  isLooping
                  style={styles.video}
                />
              </Card.Content>
            </Card>
            <Card style={styles.cases}>
              <Card.Title title="Escape from a 'bear hug attack'"  />
              <Card.Content>
                <Video
                  source={require('../assets/Defense/Video9.mp4')} 
                  rate={1.0}
                  shouldPlay
                  isLooping
                  style={styles.video}
                />
              </Card.Content>
            </Card>
          </ScrollView>
              <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => navigation.navigate('ReportScreen')}
              />
            </View>
    );
  };

  
export default DetailsScreen;
const styles= StyleSheet.create({
    container:{
        backgroundColor:"#ffcccc",
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
    heading:{
      color:"#585858",
      marginTop:20,
      marginHorizontal:10,
      fontWeight: 'bold',
      fontSize:24
    },
    Titlecases:{
      marginTop:30,
      alignSelf:"center",
      alignItems:"center",
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
      height:70,
      width:400,
    },
    text:{
      color:"#686868",
      marginTop:20,
      marginHorizontal:10,
      fontSize:17
    },
    cases:{
      flexDirection:"row",
      alignSelf:"center",
      padding:8,
      marginTop:30,
      paddingHorizontal:10,
      marginHorizontal:10,
      height:300,
      width:320,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
    video: {
      
      justifyContent:'center',
      width: 300,
      height: 200,
    },
});
