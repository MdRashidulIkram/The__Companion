import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, Alert,Platform,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";


function AddTaskPage({navigation}) {
    
    return (
        
            <View style={styles.container}>
              <View style = {styles.header}>
                <View>
                  <Text style={styles.newtasktext}>Add New Task</Text>
        
                  <View style={styles.line}></View>
                </View>   

                <View style = {styles.footer}>          
                  <View style={styles.description}>
                    <View style={styles.descriptionbox}>
                        <Text style={styles.descriptionplus}>+</Text>
                    </View>
          
                    <Text style={styles.descriptiontext}>Add Description</Text>
                  </View>
                  
                
                  <TouchableOpacity style={styles.camlogo}>
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
              </View> 

        
            </View> 
      

        
    );
}

export default AddTaskPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems : "center",
    backgroundColor: '#009387'
  },
  line: {
        backgroundColor: "aqua",
        width: "100%",
        height:2,
        marginBottom: 20
        
        
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
    flex: 0.50,
  },
  cam : {
    justifyContent:"center",
    
  },
 
  newtasktext: {
    textAlign: 'center',
    marginTop: 50,
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
    color : "#45a887",
    
  },
  homeicon : {
    color : "#45a887",
    
  },
  homebox : { 
    flex: 1,
    // justifyContent: 'flex-start'
  },
   userbox: {
    // justifyContent : "flex-end"
    
   },
  icons:{
    flexDirection: "row",
        
  },

  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 25,
    paddingBottom: 20
  },

  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
      paddingHorizontal: 60,
      paddingVertical: 30,
      justifyContent: 'center',
      alignItems: 'center'
  }
});