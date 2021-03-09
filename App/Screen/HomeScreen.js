import { useTheme } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


function HomeScreen({navigation}) {
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Animatable.Image
                    animation = "bounceInLeft" 
                    duration = {2000}
                    style = {styles.logo}
                    resizeMode ='contain'
                    source = {require('../assets/logo.png')}
                />
                
            </View>
            <Animatable.View
                style = {styles.footer}
                animation = "fadeInUp"
                duration = {2000}
             >
                <Text style = {styles.title}>An app that never lets you doubt!</Text>
                <Text style = {styles.text}>Sign in and Stay connected</Text>
                <View style = {styles.button}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.signIn}
                        onPress={()=>navigation.navigate('SignInScreen')}
                        >
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons style = {[styles.textSign, {marginTop: 6}]} 
                            name = 'navigate-next'
                            color = '#fff'
                            size = {45}
                        />
                    </TouchableOpacity>
                </View>
                
                
                
            </Animatable.View>

            
            
            
        </View>
    );
}

export default HomeScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 2.8;

const styles = StyleSheet.create({
    
    button: {
        alignItems: 'flex-end',
        marginRight: 10
    },

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    footer: {
        flex: 1,
        backgroundColor: '#0cd490',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingBottom: 60
    },

    header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    logo: {
        width: '100%',
        height: '100%', 
                
    },

    signIn: {
        width: '60%',
        backgroundColor: "#fff",
        paddingHorizontal: 30,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 30
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20
    },

    text: {
        fontSize: 15,
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 15

    },

    textSign: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#000",
        justifyContent: 'flex-end',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        paddingRight: 0 
    },

    



})