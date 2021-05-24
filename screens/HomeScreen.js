import React, { useState, useEffect,useContext } from "react";
import { View, StyleSheet, Linking, ScrollView, StatusBar } from "react-native";
import { FAB, Card, Title } from "react-native-paper";
// import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import axios from "axios";
import {url} from "../url";
import { DataContext } from "../store/GlobalState";

export default function HomeScreen({ navigation }) {
  const [crimeStats, setCrimeStats] = useState({});
  const { state, dispatch } = useContext(DataContext);
  const { userData } = state;

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `${url}/crime/crime-stats`
      );
      setCrimeStats(response.data);
    };

    getData();
  }, []);

  const initiateWhatsApp = () => {
    let url =
      'whatsapp://send?text= I need help! Its urgent. Please contact me immediately. My Current Location is,'  + userData.location.coords.latitude + "," + userData.location.coords.longitude + "" 
      '&phone=91' ;
      Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };

  // useEffect(() => {
  //   registerforPushNotification()
  //     .then((token) => console.log(token))
  //     .catch((err) => console.log(err));
  // }, []);

  async function registerforPushNotification() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = status;

    if (status !== "granted") {
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      alert("Please Turn On App Notifications Manually");
      return;
    }

    let token = await Notifications.getExpoPushTokenAsync().data;
    return token;
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <Card style={styles.cases}>
          <Card.Title title="Cases Reported" subtitle="Till Date" />
          <Card.Content>
            <Title>{crimeStats.casesReported || ""}</Title>
          </Card.Content>
        </Card>
        <Card style={styles.cases}>
          <Card.Title title="Cases Approved" subtitle="Till Date" />
          <Card.Content>
            <Title>{crimeStats.casesApproved || ""}</Title>
          </Card.Content>
        </Card>
        <Card style={styles.cases}>
          <Card.Title title="Cases Rejected" subtitle="Till Date" />
          <Card.Content>
            <Title>{crimeStats.casesRejected || ""}</Title>
          </Card.Content>
        </Card>
        <Card style={styles.cases}>
          <Card.Title title="Cases Pending" subtitle="Till Date" />
          <Card.Content>
            <Title>{crimeStats.casesPending || ""}</Title>
          </Card.Content>
        </Card>
      </ScrollView>
      <View style={{ flex: 5 }}>
        <FAB
          style={[styles.fab]}
          label="Helpline Numbers"
          theme={{ colors: { accent: "#C70039" } }}
          icon="phone-plus"
          onPress={() => navigation.navigate("EmergencyContacts")}
        />
        <FAB
          style={[styles.fab]}
          label="Nearby Police Station"
          theme={{ colors: { accent: "#C70039" } }}
          icon="police-badge"
          onPress={() => navigation.navigate("PoliceStation")}
        />
        <FAB
          style={[styles.fab]}
          theme={{ colors: { accent: "#C70039" } }}
          label="  Emergency Message  "
          icon="whatsapp"
          onPress={initiateWhatsApp}
        />
      </View>
      <FAB
        style={[
          styles.fab,
          { position: "absolute", margin: 16, right: 0, bottom: 0 },
        ]}
        small
        icon="plus"
        onPress={() => navigation.navigate("ReportScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6ffe6",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    marginTop: 10,
    marginBottom: 10,
  },
  cases: {
    flexDirection: "row",
    padding: 8,
    marginTop: 30,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    height: 130,
    width: 250,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});
