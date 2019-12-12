import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';

export default class AuthLoading extends Component {
    
    componentDidMount() {
        this.getUser();
    }

    getUser() {
        this.props.navigation.navigate('Auth');
        // firebase.auth().onAuthStateChanged(user => {
        //     this.props.navigation.navigate(user ? 'App' : 'Auth');
        // })
    }

    render() {
        return(
            <View>
                <Text>Cargando...</Text>
            </View>
        )
    }
}