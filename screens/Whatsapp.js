import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Linking,
  TouchableOpacity,
} from "react-native";

export default class Whatsapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNo: "",
      message: "",
    };
  }
  openWhatsApp = () => {
    let msg = this.state.message;
    let mobile = this.state.mobileNo;
    if (mobile) {
      if (msg) {
        let url =
          "whatsapp://send?text=" +
          this.state.message +
          "&phone=91" +
          this.state.mobileNo;
        Linking.openURL(url)
          .then((data) => {
            console.log("WhatsApp Opened successfully " + data);
          })
          .catch(() => {
            alert("Make sure WhatsApp installed on your device");
          });
      } else {
        alert("Please enter message to send");
      }
    } else {
      alert("Please enter mobile no");
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            paddingVertical: 20,
            fontWeight: "bold",
          }}
        >
          Send Emergency Message to your Family from Whatsapp
        </Text>

        <TextInput
          value={this.state.message}
          onChangeText={(message) => this.setState({ message })}
          placeholder={"Enter message"}
          multiline={true}
          style={[styles.input, { height: 60 }]}
        />

        <TextInput
          value={this.state.mobileNo}
          onChangeText={(mobileNo) => this.setState({ mobileNo })}
          placeholder={"Enter Mobile Number"}
          style={styles.input}
          keyboardType={"numeric"}
        />
        <TouchableOpacity
          style={[
            styles.signIn,
            {
              backgroundColor: "#009387",
              borderColor: "#009387",
              borderWidth: 1,
              marginTop: 15,
            },
          ]}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: "#fff",
              },
            ]}
            onPress={this.openWhatsApp}
          >
            Send WhatsApp Message
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    backgroundColor: "orange",
  },
  input: {
    width: 255,
    height: 44,
    padding: 10,
    margin: 10,
    backgroundColor: "orange",
    borderColor: "black",
    borderBottomWidth: 3,
    fontSize: 20,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -3,
    paddingLeft: 10,
    color: "#05375a",
  },
});
