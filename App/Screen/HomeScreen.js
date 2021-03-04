import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function HomeScreen(props) {
    return (
        <View style = {styles.body}>
            
            <Text style = {styles.text1}>Welcome </Text>
            <Text style = {styles.text2}>to </Text>
            <Text style = {styles.text3}>The Companion </Text>
            <Image style = {styles.logo} source = {require('../assets/project1.png')}></Image>
            <Text style = {styles.text4}>An app that</Text>
            <Text style = {styles.text5}>never lets you doubt</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'aquamarine'
    },

    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
                
    },
    text1: {
        fontSize: 40,
        fontWeight: 'bold',
        position: 'absolute',
        top: '5%',
        left: '30%',         

    },
    text2: {
        fontSize: 40,
        fontWeight: 'bold',
        position: 'absolute',
        top: '10%',
        left: '45%',         

    },
    text3: {
        fontSize: 50,
        fontWeight: 'bold',
        position: 'absolute',
        top: '15%',
        left: '10%', 
        letterSpacing: -2        

    },
    text4: {
        fontSize: 40,
        fontStyle: 'italic',
        position: 'absolute',
        letterSpacing: -2,
        bottom: '15%',
        left: '26%',      

    },
    text5: {
        fontSize: 40,
        fontStyle: 'italic',
        position: 'absolute',
        letterSpacing: -2,
        bottom: '8%',
        left: '10%',

            

    }
})

export default HomeScreen;