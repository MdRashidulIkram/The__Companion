import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text, View, Image, Alert,Platform,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";


function AddTaskPage({navigation}) {
    const [task,setTask] = useState('');
    const navTaskList = () => {
      navigation.navigate('TaskList',{item:task});
    }
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
                
                  <KeyboardAvoidingView>
                    <TextInput style={styles.input} placeholder={'Write task...'} value={task} onChangeText={text=>setTask(text)}></TextInput> 
                  </KeyboardAvoidingView>
                  <TouchableOpacity onPress={()=>navigation.navigate('Cam')} style={styles.camlogo}>
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
                      <TouchableOpacity
                        activeOpacity = {0.8}
                        onPress={()=>navigation.navigate('Dashboard')}
                      >
                       <FontAwesome name="home" size={55} style={styles.homeicon}/> 
                      </TouchableOpacity>
                    </View>
                    <View style={styles.userbox}>
                      <TouchableOpacity
                        activeOpacity = {0.8}
                        onPress={()=>navigation.navigate('Dashboard')}
                      >
                       <FontAwesome name="user" size={53} style={styles.usericon}/> 
                        
                      </TouchableOpacity>
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
    backgroundColor: '#009387',
    alignItems : "center",
    
  },
  line: {
        backgroundColor: "#fff",
        width: "100%",
        justifyContent: "center",
        height:3,
        marginBottom:5
        
        
  },
  camlogo: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 80
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
    color:"#fff",
    marginBottom: 40
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
      marginBottom: 70,
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
    color : "#3cf887",
    
  },
  homeicon : {
    color : "#3cf887",
  },
  homebox : {
    flex: 1,
    marginBottom: 2

    
    
  },
   userbox: {
    marginBottom: 2
        
   },
  icons:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
    
  },

  footer: {
    flex: .9,
    width: '90%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
},

header: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009387' 
}
});