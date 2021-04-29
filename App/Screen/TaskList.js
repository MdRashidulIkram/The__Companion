import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import Icon from "react-native-vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Task from '../components/Task';

class TaskList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            task : '',
            taskItems : []
        }
    }
    componentDidMount(){
        const {taskItems,task} = this.state;
        const item = this.props.navigation.getParam('item');
        if(item){
        this.setTaskItems([item,...taskItems]);
        this.setTask(null);
        }
    }
        
    setTask = (task) => {
        this.setState({task});
    };

    setTaskItems = (taskItems) => {
        this.setState({taskItems});
    };
    handleAddTask = () => {
        const {taskItems,task} = this.state;
        this.setTaskItems([...taskItems,task]);
        this.setTask(null);
    }
    render(){
        const {taskItems,task} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.taskbox}>
                   <View>
                    <FontAwesome style={styles.noteicon} size={30} name="list"/>
                   </View>
                   <View>
                    <Text style={styles.taskwriting}>Task List</Text>
                   </View>
                   
                </View>
                <KeyboardAvoidingView style={styles.writeTask}>
                 <TouchableOpacity onPress={this.handleAddTask}>
                  <View style={styles.addTask}> 
                  
                    <View style={styles.addWrapper}>
                        <Text>+</Text>
                    </View>    
                        <Text style={styles.textColor}>Add Task</Text>
                  
                    </View> 
                   </TouchableOpacity>
                  <TextInput style={styles.input} placeholder={'Write task...'} value={task} onChangeText={text=>this.setTask(text)}></TextInput> 
                </KeyboardAvoidingView>
                <View style={styles.taskWrapper}>
                    <View style={styles.items}>
                        {
                            taskItems.map((item,index)=>{
                                return <Task key={index} text={item}/>
                            }) 
                        }
                
                    </View>
                </View>
            </View>
        );
    } 
    
     
}

export default TaskList;

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : '#fff',
        
    },
    taskbox: {
        //alignItems: "center",
        paddingTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    taskwriting: {
        fontSize: 40,
        color: "aqua",
        
    },
    noteicon : {
       color: "aqua"
    },
    taskWrapper : {
        paddingHorizontal: 80,
        paddingTop: 50
    },
    addWrapper : {
        width: 30,
        height: 30,
        backgroundColor: "aqua",
        justifyContent: "center",
        alignItems: "center"
    },
    addTask : {
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    writeTask : {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
    },
    items: {
        marginTop: 10
    },
    textColor: {
        color: "aqua",
        fontSize: 30
    },
    input : {
        paddingHorizontal: 50,
        paddingVertical: 10,
        backgroundColor: "white",
        borderRadius: 60,
        borderWidth: 1,
        borderColor: "#C0C0C0",
        width: 200
    }

});