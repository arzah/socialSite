import React, {useState} from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';
import Userpost from './Userpost';

export default function Home(props) {

    const [posts, setPosts] = useState([]);
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);



    function remove(id) {
        let tempArray = posts.filter((item) => {
            return item.id !== id
        });
        setPosts(tempArray);
    }



  return (
    <View style={styles.container}>
          <Text>Your Post:</Text>
          <TextInput onChangeText={setText} />
      <Button title="Submit"
            buttonStyle={styles.button}
              onPress={() => {
                  setPosts(posts.concat({
                      id: count,
                      text: text,
                  }));
                  setCount(count + 1);
          }}></Button>
        <FlatList
            data={posts}
          
              renderItem={
                  ({ item }) => {
                      return (
                          <Card>
                              <Card.Title>@{props.route.params.username}</Card.Title>
                              <Userpost text={item.text} remove={remove} id={item.id}/>
                        </Card>
                    )
                }
            }
        />

      <Button
          buttonStyle={styles.button}
          title="Go to Profile"
          onPress={() => props.navigation.navigate("Profile",)}> </Button>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E5FCF5',
    padding: 8,
  },
    button: {
      backgroundColor: '#45503B',
      borderRadius: 10,
  },
});