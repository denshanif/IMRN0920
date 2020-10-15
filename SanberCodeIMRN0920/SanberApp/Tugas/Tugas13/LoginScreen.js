import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.appLogo}>
                    <Image source={require('./assets/app-logo.png')} />
                    <Text style={styles.heading1}>Hi!</Text>
                    <Text style={styles.heading2}>Sign In</Text>
                </View>
                <View style={styles.loginForm}>
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="black" underlineColorAndroid="transparent"></TextInput>
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="black" underlineColorAndroid="transparent"></TextInput>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registerButton}>
                        <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="dark" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEEFFF',
    },
    appLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        paddingTop: 75,
    },
    heading1: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#124f88',
        paddingTop: 30,
    },
    heading2: {
        fontSize: 24,
        color: '#124f88',
        marginBottom: 30,
    },
    loginForm: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 2,
    },
    input: {
        height: 36,
        width: '70%',
        backgroundColor: '#fff',
        borderColor: '#2b7ecb',
        borderWidth: 1,
        marginBottom: 40,
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 3,
        marginBottom: 80,
    },
    loginButton: {
        backgroundColor: '#2b7ecb',
        paddingVertical: 10,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
        width: '70%',
        marginBottom: 40,
    },
    loginText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    registerButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#2b7ecb',
        width: '70%',
    },
    registerText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#2b7ecb',
    },
});