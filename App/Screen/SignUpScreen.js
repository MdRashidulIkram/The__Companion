import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    StyleSheet,
    Image,
    StatusBar
} from 'react-native';


import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { color } from 'react-native-reanimated';

import firebase from "firebase";





var firebaseConfig = {
    apiKey: "AIzaSyAVSr920c7dvYW61y6vq0rRRZeF42IGd50",
    authDomain: "thecompanion-6b1c2.firebaseapp.com",
    projectId: "thecompanion-6b1c2",
    storageBucket: "thecompanion-6b1c2.appspot.com",
    messagingSenderId: "350737037717",
    appId: "1:350737037717:web:0eb027b50e54a721065e9c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function SignInScreen({navigation}) {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true

    });
    const textInputChange = (value) => {
        if(value.length != 0){
            setData({
                ...data,
                email: value,
                check_textInputChange: true
            })
        }
        else
            setData({
                ...data,
                email: value,
                check_textInputChange: false
            })
    }

    const handlePasswordChange = (value) => {
        setData({
            ...data,
            password: value
        });
    }

    const handleConfirmPasswordChange = (value) => {
        setData({
            ...data,
            confirm_password: value
        });
    }

    const updateSecurityTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecurityTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const signUpUser = () => {

        try {
            if (data.password.length < 6){
                alert("Please enter at least 6 characters")
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        }
        catch (error){
            
            console.log(error.message)
        }
    }

    const loginUser = () => {
        try {
            firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(function(user){
                console.log(user)
            })
        } catch (error) {
            console.log(error.toString(error))
        }
    }
    return (
        <View style = {styles.container}>
            <StatusBar backgroundColor = '#009387' barStyle= 'light-content'/>
            <View style = {styles.header}>
                <Text style = {styles.text_header}>Register Below</Text>
                <Text style = {styles.textDis}>Disclaimer: it's a task manager & not a therapeutic tool</Text>
            </View>
            <Animatable.View
                animation = 'fadeInUpBig'
                duration = {1500}
                style = {styles.footer}>
                <Text style = {styles.text_footer}>Email</Text>
                <View style = {styles.action}>
                    <FontAwesome 
                        name = 'user-o'
                        color = '#05375a'
                        size = {20}
                    />
                    <TextInput 
                        placeholder = 'Email/User name'
                        style = {styles.textInput}
                        autoCapitalize = 'none'
                        onChangeText = {(value) => textInputChange(value)}
                    />
                    {data.check_textInputChange ? 
                        <Animatable.View
                            animation = 'bounceIn'
                        >
                            <Feather 
                                name = 'check-circle'
                                color = 'green'
                                size = {20}
                            />
                        </Animatable.View>
                        :null
                    }
                    
                        

                </View>
                <Text style = {[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style = {styles.action}>
                    <FontAwesome 
                        name = 'lock'
                        color = '#05375a'
                        size = {20}
                    />
                    <TextInput 
                        placeholder = 'Password'
                        secureTextEntry = {data.secureTextEntry ? true : false}
                        style = {styles.textInput}
                        autoCapitalize = 'none'
                        onChangeText = {(value) => handlePasswordChange(value)}
                    />
                    <TouchableOpacity
                        onPress = {updateSecurityTextEntry}
                    >
                        {data.secureTextEntry ? 
                            <Feather 
                                name = 'eye-off'
                                color = 'grey'
                                size = {20}
                            />
                            :
                            <Feather 
                                name = 'eye'
                                color = 'blue'
                                size = {20}
                            />
                        }

                    </TouchableOpacity>
                    

                </View>

                <Text style = {[styles.text_footer, {marginTop: 35}]}>Confirm Password</Text>
                <View style = {styles.action}>
                    <FontAwesome 
                        name = 'lock'
                        color = '#05375a'
                        size = {20}
                    />
                    <TextInput 
                        placeholder = 'Confirm Password'
                        secureTextEntry = {data.confirm_secureTextEntry ? true : false}
                        style = {styles.textInput}
                        autoCapitalize = 'none'
                        onChangeText = {(value) => handleConfirmPasswordChange(value)}
                    />
                    <TouchableOpacity
                        onPress = {updateConfirmSecurityTextEntry}
                    >
                        {data.confirm_secureTextEntry ? 
                            <Feather 
                                name = 'eye-off'
                                color = 'grey'
                                size = {20}
                            />
                            :
                            <Feather 
                                name = 'eye'
                                color = 'blue'
                                size = {20}
                            />
                        }

                    </TouchableOpacity>
                    

                </View>
                
               

                <View style = {styles.button}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.signIn}
                        onPress={()=>signUpUser(data.email,data.password)}
                        >
                        <Text style={styles.textSign}>Register</Text>
                        
                    </TouchableOpacity>
                </View>  

                <View style = {styles.action}>
                    <Text style={styles.baseText}>Already have an account? <Text style={styles.innerText} onPress={() => navigation.navigate('SignInScreen')} > Sign In</Text></Text>
                    </View>              
            </Animatable.View>
        </View>
    );
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    innerText: {
        color: 'green'
    },
    baseText: {
        color: 'black'
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
        fontSize: 30,
    
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
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#45a887',
        
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },

    textDis: {
        fontSize: 20,
        marginTop: 30
    }
  });