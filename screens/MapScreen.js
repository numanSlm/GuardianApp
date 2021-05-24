import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import * as Location from "expo-location";
import { FAB } from "react-native-paper";
import { DataContext } from "../store/GlobalState";
import axios from "axios";
import { url } from "../url";
import assault from "../assets/assault.png";
import burglary from "../assets/burglary.png";
import defaultCrime from "../assets/default.png";
import disturbingPeace from "../assets/disturbing_peace.png";
import drugs from "../assets/drugs.png";
import DUI from "../assets/DUI.png";
import fraud from "../assets/fraud.png";
import homicide from "../assets/homicide.png";
import murder from "../assets/murder.png";
import MVT from "../assets/MVT.png";
import robbery from "../assets/robbery.png";
import sex_crimes from "../assets/sex_crimes.png";
import vandalism from "../assets/vandalism.png";
import weapons from "../assets/weapons.png";

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [cordinates, setCordinates] = useState([]);

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

  useEffect(() => {
    const getCordinates = async () => {
      try {
        const response = await axios.get(`${url}/crime/get-cordinates`);

        setCordinates(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getCordinates();
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
          title="test"
          description="desc"
        />
          {cordinates.length > 0
            ? cordinates.map((key, index) => {
              {console.log(key.type,index)}
                return (
                  <Marker
                    coordinate={{
                      latitude: key.latitude,
                      longitude: key.longitude,
                    }}
                    key={index}
                    image={key.type}
                    title="test"
                    description="desc"
                    style={styles.marker}
                  />
                  
                );
              })
            : null}
          <Circle
            center={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            radius={500}
            strokeColor={"rgb(204, 16, 52)"}
            fillColor={"rgba(204, 16, 52, 0.5)"}
          />
        </MapView>
      ) : null}

      <FAB
        style={[styles.fab, { marginBottom: 90, marginEnd: 23 }]}
        small
        icon="plus"
        onPress={() => navigation.navigate("ReportScreen")}
      />
      <FAB
        style={styles.fab}
        medium
        icon="police-badge"
        onPress={() => navigation.navigate("PoliceStation")}
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

  marker: {
    width: 5,
    height: 5,
  },
});
