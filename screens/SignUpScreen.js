import * as React from "react";
import {
  View,
  Text,
  Platform,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import firebase from "firebase";

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    confirm_password: "",
    check_adharInputChange: false,
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const adharInputChange = (val) => {
    if (val.length == 12) {
      setData({
        ...data,
        adhar: val,
        check_adharInputChange: true,
      });
    } else {
      setData({
        ...data,
        adhar: val,
        check_adharInputChange: false,
      });
    }
  };

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const handleSignupSubmit = async () => {
    // try {
    //   const response = await firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(data.email, data.password);
    //   console.log(response);
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now</Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Full Name</Text>
          <View style={styles.action}>
            <MaterialIcons name="person" size={20} color="#05375a" />
            <TextInput placeholder="Your Full Name" style={styles.textInput} />
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>
            Aadhaar Card No.
          </Text>
          <View style={styles.action}>
            <FontAwesome name="id-card" size={20} color="#05375a" />
            <TextInput
              placeholder="Your Aadhar No."
              style={styles.textInput}
              onChangeText={(val) => adharInputChange(val)}
            />
            {data.check_adharInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" size={20} color="green" />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>
            Registered Mobile No.
          </Text>
          <View style={styles.action}>
            <MaterialIcons name="mobile-friendly" size={20} color="#05375a" />
            <TextInput
              placeholder="Your Registered Mobile No."
              style={styles.textInput}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>
            One Time Password - OTP
          </Text>
          <View style={styles.action}>
            <Feather name="user-check" size={20} color="#05375a" />
            <TextInput
              placeholder="Your One Time Password"
              style={styles.textInput}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>
            Emergency Contact No.
          </Text>
          <View style={styles.action}>
            <MaterialIcons name="person-add" size={20} color="#05375a" />
            <TextInput
              placeholder="Emergency Contact No."
              style={styles.textInput}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>E-mail id</Text>
          <View style={styles.action}>
            <MaterialIcons name="email" size={20} color="#05375a" />
            <TextInput
              placeholder="Your email address"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" size={20} color="green" />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
          <View style={styles.action}>
            <FontAwesome name="lock" size={20} color="#05375a" />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" size={20} color="grey" />
              ) : (
                <Feather name="eye" size={20} color="grey" />
              )}
            </TouchableOpacity>
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <FontAwesome name="lock" size={20} color="#05375a" />
            <TextInput
              placeholder="Re-enter Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
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
            onPress={handleSignupSubmit}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#fff",
                },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
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
              Sign In
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
