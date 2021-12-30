import 'react-native-gesture-handler';
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import Library from './Library';
import Community from './Community';

// Create collection first!
const Stack = createStackNavigator();

const user = {
  username: "",

};


export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Home" component={Home} initialParams={user}/>
        <Stack.Screen name="Profile" component={Profile} initialParams={user} />
        <Stack.Screen name="Library" component={Library} initialParams={user} />
        <Stack.Screen name="Community" component={Community} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: "#734524",
  },

});