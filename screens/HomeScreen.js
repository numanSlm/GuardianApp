
import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Details Screen"
        onPress={() => navigation.navigate("Details")}
      />
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate("Map")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },

});
