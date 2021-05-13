import React, { useState, useEffect, useContext } from "react";
import { Platform, View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { FAB } from "react-native-paper";
import { DataContext } from "../store/GlobalState";

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const { state, dispatch } = useContext(DataContext);
  const { userData } = state;

  useEffect(() => {
    const setCurrentLocation = async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      dispatch({ type: "USER_DATA", payload: { location } });
    };

    setCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      {userData.location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: userData.location.coords.latitude,
            longitude: userData.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: userData.location.coords.latitude,
              longitude: userData.location.coords.longitude,
            }}
            image={require("../assets/person.png")}
            title="test"
            description="desc"
          />
          <Circle
            center={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            radius={1000}
            strokeColor={"rgb(204, 16, 52)"}
            fillColor={"rgba(204, 16, 52, 0.5)"}
          />
        </MapView>
      ) : null}

      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
