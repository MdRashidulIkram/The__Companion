import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
function Dashboard({navigation}) {
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <TouchableOpacity 
                    activeOpacity={0.8}
                    onPress={()=>{}}
                >
                <FontAwesome 
                    name = 'bars'
                    size = {25}
                    color = '#fff' 
                
                />
                </TouchableOpacity>
                <Text style = {styles.textHeader}>Dashboard</Text>
            </View>

            <View style = {styles.footer}>
                <View style = {styles.emoji}>
                    <View style = {styles.lineUP}></View>
                    <Text style = {styles.textFooter}>How are you feeling today!</Text>
                    <View style = {styles.lineDown}></View>
                </View>
                
                <View style = {styles.tip}>
                    <FontAwesome 
                        name = 'lightbulb-o'
                        color = '#b3b300'
                        size = {40}
                    />
                    <Text style = {styles.textTip}>Tip of the day...</Text>
                    <FontAwesome 
                        name = 'lightbulb-o'
                        color = '#b3b300'
                        size = {40}
                    />
                </View>
                <View style = {styles.taskList}>
                    <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.signIn}
                            onPress={()=>{}}  >
                            <FontAwesome 
                                name = 'list-alt'
                                color = '#05375a'
                                size = {22}
                            />
                            <Text style={[styles.textSign, {marginLeft: 10}]}>Task List</Text>
                            
                        </TouchableOpacity>
                </View>
                    
                    
                <View style = {styles.addTask}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={[styles.signIn, {
                            flexDirection: 'column'
                        }]}
                        onPress={()=>{}}  >

                        <Text style = {styles.textSign}>Add</Text>
                        
                        <FontAwesome style = {styles.plusbox}
                            name = 'plus'
                            color = '#e6e600'
                            size = {40}
                    

                        />
                        
                        <Text style = {styles.textSign}>New Task</Text>
                        
                    </TouchableOpacity>
                </View>
            </View>
            
                

        </View>
    );
}

export default Dashboard;

const styles = StyleSheet.create({
    addTask: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        
    },

    container: {
        flex: 1
    },

    emoji: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    header: {
        flex: .5,
        backgroundColor: '#45a887',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between'
    },

    footer: {
        flex:8,
        padding: 20
    },

    lineUP: {
        backgroundColor: '#80ffbf',
        width: '90%',
        height: 4
    },

    lineDown: {
        backgroundColor: '#80ffbf',
        width: '90%',
        height: 4
    },

    plusbox: {
        backgroundColor: '#45a887',
        padding: 10,
        borderRadius: 10
    },

    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'          
    },

    taskList: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
        
    },

    textFooter: {
        fontSize: 25,
        color: '#000'
        
    },

    textSign: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#7E48BA',
    
    },

    textTip: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 25
    },

    tip: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    }

})