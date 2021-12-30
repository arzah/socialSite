import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class Userpost extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.text}</Text>
                <Button type="clear" title="Remove" onPress={() => this.props.remove(this.props.id)}/>
            </View>
        );
    }
}
