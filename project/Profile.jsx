import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'
import {Button} from 'react-native-elements'

export default function Profile(props) {


    const [displayText, setDisplayText] = useState("");
    const [submittedText, setSubmittedText] = useState('');


    function changeText(enteredText) {
        setDisplayText(enteredText);
    }

    function makeBlank() {
        setSubmittedText(displayText);
        setDisplayText('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.larger}>Current Username: {submittedText}</Text>
            <TextInput placeholder="Input New Username" style={styles.textBox} onChangeText={changeText} value={displayText} />

            <Button title="Change Username" buttonStyle={styles.button} onPress={makeBlank}></Button>
            
            <View style={styles.expand}>
            <Button title="Home" buttonStyle={styles.button} onPress={() => props.navigation.navigate("Home", {
            username: submittedText,
            })}> </Button>

            <Button title="Library" buttonStyle={styles.button} onPress={() => props.navigation.navigate("Library", {
            username: submittedText,
            })}> </Button>

            <Button title="Community" buttonStyle={styles.button}  onPress={() => props.navigation.navigate("Community", {
            username: submittedText,
            })}> </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  larger: {
    fontSize: 20,
    },
    textBox: {
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 15,
        fontSize: 15,
    },
    container: {
        padding: 5,
        backgroundColor: "#E5FCF5",
        flex: 1,
    },
  expand: {
    flex: 1,
    marginTop: 90,
    },
    button: {
        backgroundColor: '#45503B',
        margin: 10,
        borderRadius: 10,
  },
});