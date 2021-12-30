import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import {Card, Text, Button} from 'react-native-elements';

export default function Community() { 
	
    const [like, setLike] = useState(6); 
    const [dislike, setDislike] = useState(-20);
    const [wlike, setwLike] = useState(30); 
    const [wdislike, setwDislike] = useState(0);
    const [clike, setcLike] = useState(800); 
    const [cdislike, setcDislike] = useState(-6);
    const [nlike, setnLike] = useState(30); 
    const [ndislike, setnDislike] = useState(-26);

    
	return (
        <View style={styles.container}>
      <Card> 
        <Card.Title>@booksrthebst</Card.Title> 
            <Text>Six of Crows is ok, don't really get the hype behind it.</Text>
            <View style={styles.fixToText}>
                <Button title="Like" buttonStyle={styles.button} onPress={() => {
                    setLike(like + 1); 
                    
				}
				}></Button>
                <Text>{like}</Text>
            
                <Button title="Dislike" buttonStyle={styles.button} onPress={() => {
                    setDislike(dislike - 1)
				}
				}></Button>
                <Text>{dislike}</Text>
            </View>
            </Card>

             <Card> 
        <Card.Title>@Libby'sCorner</Card.Title> 
            <Text>Just finished 'We were liars'...crying and throwing up rn.</Text>
            <View style={styles.fixToText}>
                <Button title="Like" buttonStyle={styles.button} onPress={() => {
                    setwLike(wlike + 1); 
                    
				}
				}></Button>
                <Text>{wlike}</Text>
            
                <Button title="Dislike" buttonStyle={styles.button} onPress={() => {
                    setwDislike(wdislike - 1)
				}
				}></Button>
                <Text>{wdislike}</Text>
            </View>
            </Card>


             <Card> 
        <Card.Title>@ciara</Card.Title> 
            <Text>Whoever told me Cruel Prince had romance, lets talk.</Text>
            <View style={styles.fixToText}>
                <Button title="Like" buttonStyle={styles.button} onPress={() => {
                    setcLike(clike + 1);
                    
				}
				}></Button>
                <Text>{clike}</Text>
            
                <Button title="Dislike" buttonStyle={styles.button} onPress={() => {
                    setcDislike(cdislike - 1)
				}
				}></Button>
                <Text>{cdislike}</Text>
            </View>
            </Card>
            
            <Card> 
        <Card.Title>@ninalikestoread</Card.Title> 
            <Text>Controversial opinion but BookTok just recommends the same 4 authors over and over again. </Text>
            <View style={styles.fixToText}>
                <Button title="Like" buttonStyle={styles.button} onPress={() => {
                    setnLike(nlike + 1); 
                    
				}
				}></Button>
                <Text>{nlike}</Text>
            
                <Button title="Dislike" buttonStyle={styles.button} onPress={() => {
                    setnDislike(ndislike - 1)
				}
				}></Button>
                <Text>{ndislike}</Text>
            </View>
            </Card>
            
            </View>
        
        
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor: '#E5FCF5',
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
    button: {
        backgroundColor: '#45503B',
        margin: 10,
        borderRadius: 10,
  },
});

