import * as React from "react";
import { Linking, View, StyleSheet, StatusBar } from "react-native";
import { FAB } from "react-native-paper";

const EmergencyContacts = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#C70039" barStyle="light-content" />
      <FAB
        style={styles.fab}
        label="Police Station No.  "
        small
        theme={{ colors: { accent: "#C70039" } }}
        icon="phone-plus"
        onPress={() => {
          Linking.openURL("tel:100");
        }}
      />
      <FAB
        style={styles.fab}
        label="Women helpline no."
        small
        theme={{ colors: { accent: "#C70039" } }}
        icon="human-female-female"
        onPress={() => {
          Linking.openURL("tel:1091");
        }}
      />
      <FAB
        style={styles.fab}
        label="Call an Ambulance "
        small
        theme={{ colors: { accent: "#C70039" } }}
        icon="ambulance"
        onPress={() => {
          Linking.openURL("tel:108");
        }}
      />
      <FAB
        style={styles.fab}
        label="Emergency helpline no."
        small
        theme={{ colors: { accent: "#C70039" } }}
        icon="car-brake-alert"
        onPress={() => {
          Linking.openURL("tel:112");
        }}
      />
    </View>
  );
};
export default EmergencyContacts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    marginTop: 20,
  },
});
