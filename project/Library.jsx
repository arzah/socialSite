import React, {useState} from 'react';
import { View, TextInput, FlatList, StyleSheet, Modal } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';
import Userpost from './Userpost';

export default function Library(props) {

    const [posts, setPosts] = useState([]);
    const [text, setText] = useState("");
    const [genre, setGenre] = useState("");
    const [count, setCount] = useState(0);

    const [isModalVisible, setModalVisible] = useState(false);

    function remove(id) {
        let tempArray = posts.filter((item) => {
            return item.id !== id
        });
        setPosts(tempArray);
    }


  return (
    <View style={styles.container}>
          <Button title="Add Books" buttonStyle={styles.button} onPress={() => setModalVisible(true)} />
            <Modal // I learned about Modal's from https://reactnative.dev/docs/modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {

              }} >
              <View style={styles.modalStyling}>
              <TextInput style={styles.textColor}
                  placeholder="Book Title"
                  onChangeText={setText} />
              <TextInput style={styles.textColor}
                  placeholder="Genre"
                  onChangeText={setGenre} />
                  <Button title="Submit"
                      buttonStyle={styles.button}
              onPress={() => {
                  setPosts(posts.concat({
                      id: count,
                      text: text,
                      genre: genre,
                  }));
                  setCount(count + 1);
                  setModalVisible(false);
          }}></Button>
          </View>
            </Modal>
        <FlatList
            data={posts}
          
              renderItem={
                  ({ item }) => {
                      return (
                          <Card style={styles.cardStyling}>
                              <Card.Title style={styles.textColor}>Book Title: {item.text}</Card.Title>
                              <Text style={styles.textColor}>Genre: </Text>
                                  <Userpost text={item.genre} remove={remove} id={item.id} /> 
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
    modalStyling: {
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: "#B3DEC1",
        padding: 30,
        margin: 25,
    },
    textColor: {
        color: 'black',
    },
    cardStyling: {
        alignItems: "center",
    },
    button: {
        backgroundColor: '#45503B',
        borderRadius: 10,
    },
});