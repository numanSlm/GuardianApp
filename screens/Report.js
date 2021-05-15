import React,{useState,useEffect} from 'react';
import {View, Text, TextInput,TouchableOpacity, Image, Button, StyleSheet, StatusBar, ScrollView, Platform, Picker} from 'react-native';
import{Video} from 'expo-av';
import * as ImagePicker from 'expo-image-picker';


export default function Report(){
    const [selectedValue, setSelectedValue] = useState("Theft");
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

        useEffect(() => {
            (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync(all);
                if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
            })();
        }, []);

        const pickImage = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });

        if (!result.cancelled) {
                setImage(result.uri);
              }
            };

        const pickVideo = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            });

            console.log(result);

            if (!result.cancelled) {
            setVideo(result.uri);
            }
        };



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
                            <Picker.Item label="Theft" value="Theft" />
                            <Picker.Item label="Bulgary" value="Bulgary" />
                            <Picker.Item label="Murder" value="Murder" />
                        </Picker>
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
                }]}onPress={pickImage}
                >Pick an Image from camera roll</Text>
            </TouchableOpacity>
                    <View style={styles.action}>
                        {image && <Image source={{ uri:image}} 
                            style={ styles.video} />}
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
                        }]}onPress={pickVideo}
                        >Pick an Video from camera roll</Text>
                    </TouchableOpacity>
                      
                    <View style={styles.action}>
                        {video && <Video source={{ uri:video}}  rate={1.0}
                            shouldPlay style={ styles.video} />}
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
        width: 200,
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
    }
});