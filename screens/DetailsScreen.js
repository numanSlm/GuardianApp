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
            <Text style={styles.text}> The ability to defend yourself and your loved ones. </Text>
            <Text style={styles.text}> Physical habits that create and maintain a healthier you.</Text>
            <Text style={styles.text}> A Sharper mental focus.</Text>
            <Text style={styles.text}> A network of friends and colleagues.</Text>
          
            <Text style={styles.heading}>
            Here are a few common defense mechanisms:
            </Text>

            <Card style={styles.cases}>
              <Card.Title title="Escape from side headlock" subtitle="Till Date" />
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
              <Card.Title title="Groin Kick" subtitle="Till Date" />
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
              <Card.Title title="Heel palm strike" subtitle="Till Date" />
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
              <Card.Title title="Elbow strike" subtitle="Till Date" />
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
              <Card.Title title="Hammer strike" subtitle="Till Date" />
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
              <Card.Title title="Alternative elbow strike" subtitle="Till Date" />
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
              <Card.Title title="Hammer strike while swinging" subtitle="Till Date" />
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
              <Card.Title title="Escape from a 'bear hug attack'" subtitle="Till Date" />
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
      marginTop:20,
      marginHorizontal:10,
      fontWeight: 'bold',
      fontSize:24
    },
    text:{
      marginTop:20,
      marginHorizontal:10,
      fontSize:17
    },
    cases:{
      flexDirection:"row",
      padding:8,
      marginTop:30,
      paddingHorizontal:10,
      marginHorizontal:10,
      height:300,
      width:340,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
    video: {
      alignSelf: 'center',
      width: 320,
      height: 200,
    },
});
