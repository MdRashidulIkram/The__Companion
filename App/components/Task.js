import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemsLeft}>

            </View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
    );
}

export default Task;

const styles = StyleSheet.create({
 item : {
    borderRadius: 10,
    padding: 15,
    backgroundColor: "mediumaquamarine",
    justifyContent: "space-between",
    margin: 10
 },
 itemText : {
     maxWidth: "80%"
 }
});