import React, { Component } from 'react';
import * as firebase from 'firebase';

import Authenticator from '../components/Authenticator';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    setEmail = (email) => {
        this.setState({ email });
    }

    setPassword = (password) => {
        this.setState({ password });
    }

    login = async () => {
        try {
            let response = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            let { user } = response;
            console.log(user);
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <Authenticator
                setPassword={this.setPassword}
                setEmail={this.setEmail}
                mainButtonTitle="Ingresar"
                secondaryButtonTitle="No tengo cuenta"
                navigationAction={ () => this.props.navigation.navigate('SignUp') }
                mainAction={this.login}
            />
        );
    }
}