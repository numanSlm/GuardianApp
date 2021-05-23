import React, { useContext } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { FAB, Avatar, Title, Caption } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import Acc from "./Acc";
import { DataContext } from "../store/GlobalState";

const ExploreScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#694fad" barStyle="light-content" />
      <View style={styles.name}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            }}
            size={70}
          />
          <View style={{ marginLeft: 15, flexDirection: "column" }}>
            <Title style={styles.title}>{auth.firstName}</Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Feather name="map-pin" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              {auth.city}, {auth.state}
            </Text>
          </View>
          <View style={styles.row}>
            <Feather name="phone" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              +91-{auth.mobile}
            </Text>
          </View>
          <View style={styles.row}>
            <Feather name="mail" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              {auth.email}
            </Text>
          </View>
        </View>
      </View>
      <Acc />

      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate("ReportScreen")}
      />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  name: {
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: 20,
    marginTop: 25,
  },
  title: {
    marginTop: 7,
    fontSize: 27,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 20,
    lineHeight: 25,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  userInfoSection: {
    marginTop: 35,
    paddingHorizontal: 20,
    marginBottom: 25,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
});
