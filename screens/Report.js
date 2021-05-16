import React,{useState,useEffect} from 'react';
import {View, Text, TextInput,TouchableOpacity, Image, StyleSheet, StatusBar, ScrollView, Platform, Picker, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';


export default function Report(){
    const [selectedValue, setSelectedValue] = useState("Theft");

        useEffect(() => {
            (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.getMediaLibraryPermissionsAsync(all);
                if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
            })();
        }, []);

        const pickImage = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
            
            if (!result.cancelled) {
                    this.uploadImage(result.uri)
                    .then(()=>{
                        Alert.alert('Success');
                    })
                    .catch((error) =>{
                        Alert.alert(error);
                    });
                }
                console.log(result.uri)
            };
        
        uploadImage = async(uri) => {
                const response = await fetch(uri);
                const blob = await response.blob();
                var ref = firebase.storage().ref().child("my-image");
                return ref.put(blob);
        }

       

        const captImage = async () => {
            let result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
            
            if (!result.cancelled) {
                    this.uploadImage(result.uri)
                    .then(()=>{
                        Alert.alert('Success');
                    })
                    .catch((error) =>{
                        Alert.alert(error);
                    });
                }
                console.log(result.uri)
            };
        
        uploadImage = async(uri) => {
                const response = await fetch(uri);
                const blob = await response.blob();
                var ref = firebase.storage().ref().child("my-image");
                return ref.put(blob);
        }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor= '#009387' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>Report here</Text>
            </View>

            <View style={styles.footer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.text_footer}>Crime</Text>
                    <View style={styles.action}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: 320 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Motor Vehicle Theft" value="Motor Vehicle Theft" />
                            <Picker.Item label="Bulgary" value="Bulgary" />
                            <Picker.Item label="Murder" value="Murder" />
                            <Picker.Item label="Assault" value="Assault" />
                            <Picker.Item label="Disturbing the Peace" value="Disturbing the Peace" />
                            <Picker.Item label="Drugs / Alcohol Violations" value="Drugs / Alcohol Violations" />
                            <Picker.Item label="Homicide" value="Homicide" />
                            <Picker.Item label="Robbery" value="Robbery" />
                            <Picker.Item label="Sex Crimes" value="Sex Crimes" />
                            <Picker.Item label="Vandalism" value="Vandalism" />
                            <Picker.Item label="Weapons" value="Weapons" />
                            <Picker.Item label="DUI" value="DUI" />
                            <Picker.Item label="Fraud" value="Fraud" />

                        </Picker>
                    </View>
                    <Text style={[styles.text_footer,{marginTop:35}]}>Upload Image</Text>
                <View style={styles.imgbut}>
                    <TouchableOpacity
                        style={[styles.signup, {
                            backgroundColor: '#009387',
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color : '#fff' 
                        }]}onPress={pickImage}
                        >Pick from Gallery</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.signup, {
                            backgroundColor: '#009387',
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color : '#fff' 
                        }]}onPress={captImage}
                        >Take a Picture</Text>
                    </TouchableOpacity>
                </View>   


                    <View style={styles.action}>
                        <Image source={{uri:"result.uri"}} 
                            style={ styles.video} />
                    </View>


                    <Text style={[styles.text_footer,{marginTop:35}]}>Description of the Crime</Text>
                    <View style={styles.action}>
                    <TextInput 
                        multiline
                        placeholder='Crime Description' 
                        style={styles.textInput}
                    />
                    </View>

                    <TouchableOpacity
                        style={[styles.signIn, {
                            backgroundColor: '#009387',
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color : '#fff' 
                        }]}
                        >Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
};


const styles= StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#009387'
      },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 40
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -3,
        paddingLeft: 10,
        color: '#05375a',
    },
    video: {
        alignSelf: 'center',
        width: '100%',
        height: 200,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    signup: {
        width: 155,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    imgbut:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between'
    }
});
