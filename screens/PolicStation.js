import React,{useContext} from 'react';
import { WebView } from 'react-native-webview';
import { DataContext } from "../store/GlobalState";
import { StyleSheet} from 'react-native';

export default function PoliceStation() {

    const { state, dispatch } = useContext(DataContext);
    const { userData } = state;
    console.log(userData.location)

    return (
      <WebView
        source={{ uri: "https://www.google.co.in/maps/search/nearby+police+station/@" + userData.location.coords.latitude + ',' + userData.location.coords.longitude + ',13z/data=!3m1!4b1?hl=en'}}
        style={{ marginTop: 20 }}
      />
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
})