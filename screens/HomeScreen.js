
import React, { useEffect } from "react";
import { View, StyleSheet,ScrollView } from "react-native";
import { FAB,Card,Title } from "react-native-paper";
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
          <ScrollView
            showsVerticalScrollIndicator={false}
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
          <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => navigation.navigate('ReportScreen')}
            />
           
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#e6ffe6",
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
  cases:{
      flexDirection:"row",
      padding:8,
      marginTop:30,
      paddingHorizontal:10,
      marginHorizontal:10,
      height:130,
      width:300,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },

});
