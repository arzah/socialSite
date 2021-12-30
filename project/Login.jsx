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
    <View>
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
      <Button title="Submit" onPress={() => {checkAuth()}} />
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
});