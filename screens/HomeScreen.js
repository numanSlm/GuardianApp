import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { FAB, Card, Title } from "react-native-paper";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    registerforPushNotification()
      .then((token) => console.log(token))
      .catch((err) => console.log(err));
  }, []);

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
            <Title>890</Title>
          </Card.Content>
        </Card>
        <Card style={styles.cases}>
          <Card.Title title="Cases Investigated" subtitle="Till Date" />
          <Card.Content>
            <Title>788</Title>
          </Card.Content>
        </Card>
        <Card style={styles.cases}>
          <Card.Title title="Cases Pending" subtitle="Till Date" />
          <Card.Content>
            <Title>98</Title>
          </Card.Content>
        </Card>
        <Card style={styles.cases}>
          <Card.Title title="Cases Recorded" subtitle="Till Date" />
          <Card.Content>
            <Title>890</Title>
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
          onPress={() => navigation.navigate("Whatsapp")}
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
