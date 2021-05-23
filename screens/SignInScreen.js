import * as React from "react";
import {
  View,
  Text,
  Platform,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import firebase from "firebase";
import { DataContext } from "../store/GlobalState";
import axios from "axios";
import { url } from "../url";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const { state, dispatch } = React.useContext(DataContext);

  const handleSignin = async () => {
    console.log(email, password);
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      const result = await axios.post(`${url}/user/get-user`, {
        email,
      });

      if (result.status === 200) {
        dispatch({
          type: "ADD_AUTH_DATA",
          payload: result.data,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>E-mail id</Text>
        <View style={styles.action}>
          <FontAwesome name="id-card" size={20} color="#05375a" />
          <TextInput
            placeholder="Your email address"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setEmail(val)}
          />
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" size={20} color="#05375a" />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setPassword(val)}
          />
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}
          >
            {secureTextEntry ? (
              <Feather name="eye-off" size={20} color="grey" />
            ) : (
              <Feather name="eye" size={20} color="grey" />
            )}
          </TouchableOpacity>
        </View>

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
          onPress={handleSignin}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: "#fff",
              },
            ]}
          >
            Sign In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SignUpScreen")}
          style={[
            styles.signIn,
            {
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
                color: "#009387",
              },
            ]}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -3,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
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
});
