import React from 'react';

import { View, Text, TextInput, Button } from 'react-native';

export default (props) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center'
        }}>
            <Text>Correo electrónico:</Text>
            <TextInput onChangeText={ (text) => props.setEmail(text) } />

            <Text>Contraseña:</Text>
            <TextInput onChangeText={ (text) => props.setPassword(text) } />

            <Button title={props.mainButtonTitle} onPress={ () => props.mainAction() } />
            <Button title={props.secondaryButtonTitle} onPress={ () => props.navigationAction() } />
        </View>
    );
}