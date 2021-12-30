import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {Input, Text, Button} from 'react-native-elements';

export default function AssetExample(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function checkAuth() {
    if(username == "Scoobert" && password == "Doo") {
      props.navigation.replace("Profile");
    }
  }

  return (
    <View style={styles.background}>
      <View style={styles.expand}>
      <Text h2>Username:</Text>
      <Input
        style={styles.input}
        placeholder="Password"
        onChangeText={setUsername}
        value={username}
       />
      <Text h2>Password</Text>
      <Input
        style={styles.input}
        placeholder="Password" 
        onChangeText={setPassword}
        secureTextEntry={true} />
        </View>
      <Button title="Submit" buttonStyle={styles.button} onPress={() => {checkAuth()}} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  background: {
    backgroundColor: "#C4D7F2",
    flex: 1,
  },
  button: {
    backgroundColor: "#776871",
  },
  expand: {
    flex: 1,
    marginTop: 90,
  },
});