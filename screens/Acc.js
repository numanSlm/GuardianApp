import React, { Component, useContext, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import Collapsible from "react-native-collapsible";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import { url } from "../url";
import { DataContext } from "../store/GlobalState";
import moment from "moment";

const Acc = () => {
  const [activeSections, setActiveSection] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const [multipleSelect, setMultipleSelect] = useState(false);
  const [data, setData] = useState([]);

  const { state, dispatch } = useContext(DataContext);

  const { auth } = state;

  useEffect(() => {
    const getUserReportedCrimes = async () => {
      const response = await axios.get(
        `${url}/crime/get-user-crimes?uid=${auth.uid}`
      );

      setData(response.data);
    };

    getUserReportedCrimes();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            style={{ marginHorizontal: 15 }}
            name="local-attraction"
            size={30}
            color="black"
          />
          <Text style={styles.title}>Your Reports</Text>
        </View>
        {data.length > 0 ? (
          <>
            {data.map((_data, index) => {
              return (
                <View key={index}>
                  <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
                    <View style={styles.header}>
                      <Text style={styles.headerText}>Report: {index + 1}</Text>
                      <AntDesign
                        style={{ padding: 15, marginHorizontal: 120 }}
                        name="downcircle"
                        size={24}
                        color="black"
                      />
                    </View>
                  </TouchableOpacity>
                  <Collapsible collapsed={collapsed} align="center">
                    <View style={styles.content}>
                      <Text>
                        Reported On:{" "}
                        {moment
                          .unix(_data.created)
                          .format("MM/DD/YYYY, h:mm:ss a")}
                      </Text>
                      <Text>Crime Type: {_data.crimeType.toUpperCase()}</Text>
                      <Text>
                        Crime Status: {_data.verified ? "Approved" : "Rejected"}
                      </Text>
                      <Text>Description: {_data.policeDescription}</Text>

                      <Image
                        style={{ width: "100%", height: 200, marginTop: 10 }}
                        source={{
                          uri: "file:/data/user/0/host.exp.exponent/cache/ExperienceData/UNVERIFIED-192.168.43.82-Crime/ImagePicker/735feb8c-4672-4d3c-8a9e-b28ac9b3fa65.jpg",
                        }}
                      />
                    </View>
                  </Collapsible>
                </View>
              );
            })}
          </>
        ) : (
          <Text style={styles.noCrimes}>No Crimes Reported Yet</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Acc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -120,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  noCrimes: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 10,
  },
  header: {
    padding: 10,
    flexDirection: "row",
  },
  headerText: {
    marginTop: 15,
    marginHorizontal: 30,
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    marginBottom: 8,
    backgroundColor: "#fff",
  },
  active: {
    backgroundColor: "rgba(255,255,255,1)",
  },
  inactive: {
    backgroundColor: "rgba(245,252,255,1)",
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  selector: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  activeSelector: {
    fontWeight: "bold",
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center",
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
