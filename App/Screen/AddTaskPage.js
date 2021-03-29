import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, Alert,Platform,TouchableOpacity} from 'react-native';
import {useDimensions,useDeviceOrientation} from "@react-native-community/hooks";
import Icon from "react-native-vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";


function AddTaskPage({navigation}) {
    const presshandler = () => {
      navigation.navigate('Camera')
    }
    return (
        
            <View style={styles.container}> 
        
              <View>
                <Text style={styles.newtasktext}>Add New Task</Text>
     
                 <View style={styles.line}></View>
              </View>   
              <View style={styles.description}>
                 <View style={styles.descriptionbox}>
                    <Text style={styles.descriptionplus}>+</Text>
                 </View>
       
                <Text style={styles.descriptiontext}>Add Description</Text>
              </View>
              
            
              <TouchableOpacity onPress = {presshandler}  style={styles.camlogo}>
                <View style= {styles.middle}>
                <FontAwesome name = "camera" size={80} style={styles.cam}/>
                </View>  
                <View style={styles.uploadphoto}>
                <Text style={styles.uploadphototext}>Upload Photo</Text>
                </View>
              </TouchableOpacity>  
                <View style={styles.donebox}>
                    <Text style={styles.done}>Done</Text>
                </View>
              <View style={styles.icons}> 
                
                <View style={styles.homebox}>
                <FontAwesome name="home" size={55} style={styles.homeicon}/> 
                </View>
                <View style={styles.userbox}>
                <FontAwesome name="user" size={53} style={styles.usericon}/> 
                </View>
              </View>
            </View> 
      

        
    );
}

export default AddTaskPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d212d',
    alignItems : "center",
    //flexDirection : "row"
  },
  line: {
        backgroundColor: "aqua",
        
        width: "85%",
        justifyContent: "center",
        height:2,
        
        
  },
  camlogo: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  description : {
    flexDirection:"row",
    justifyContent: "center",
    marginTop: 10,
    flex: 0.50
  },
  cam : {
    justifyContent:"center",
    
  },
 
  newtasktext: {
    justifyContent: "center",
    marginTop: 60,
    fontSize:40,
    color:"#3cf887"
  },

  middle: {
    backgroundColor: "#3cf887",
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    
  },
  
  descriptionbox: {
    backgroundColor:"#3cf887", 
    width: 40,
    height: 40,
    justifyContent:"center",
    marginRight: 10,
    alignContent: "center",
    //margin: 6
  },
  
  descriptionplus:{
    textAlign: "center", 
    fontSize:40,
    textAlignVertical: "center",
    marginBottom : 5
  },

  descriptiontext :{
    
    justifyContent:"center",
    fontSize:30,
    color:"#3cf887"
  },
  uploadphoto: {
      marginTop: 5,
  },
  uploadphototext: {
     
    color: "white",
    justifyContent:"center",
    
    fontSize:20,
    
  },

  donebox: {
      backgroundColor:"blue",
      marginBottom: 120,
      width: 100,
      height:30,
      justifyContent: "center",
      marginTop: 20
  },
  done: {
      color: "white",
      textAlignVertical: "center",
      fontSize: 20,
      marginLeft: 25
  },
  usericon:{
    color : "aqua",
    //alignSelf: "center",
    //alignItems: "center"
  },
  homeicon : {
    color : "aqua",
    //alignSelf: "center",
    
    marginBottom: 0
  },
  homebox : {
//     //backgroundColor : "blue",
    width: "50%",
    position: "absolute",
    left: 100,
    bottom: 5
  },
   userbox: {
//    // backgroundColor: "blue",
    width : "50%",
    justifyContent : "flex-end",
    position: "absolute",
    right: -40,
    bottom: 5
   },
  icons:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    //flex: 0.8,
    alignItems: "center",
    marginBottom: 5
  }
});