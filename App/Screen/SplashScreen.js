import React from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


function SplashScreen(props) {
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
            <Image 
                style = {styles.logo}
                resizeMode ='contain'
                source = {require('../assets/project1.png')}
                >
             </Image>
            </View>
            <View style = {styles.footer}>
                <Text style = {styles.title}>An app that never lets you doubt</Text>
                <Text style = {styles.text}>Sign in and Stay connected</Text>
            </View>
        </View>
    );
}

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 2.8;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aquamarine'
    },

    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
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

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20
    },

    text: {
        fontSize: 15,
        margin: 10

    }


})