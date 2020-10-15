import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class RegisterScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <TouchableOpacity>
                        <Ionicons name="md-arrow-round-back" size={32} color="#124f88" />
                    </TouchableOpacity>
                    <Text style={styles.heading2}>Register</Text>
                    <TouchableOpacity>
                        <Ionicons name="md-help-circle" size={32} color="#124f88" />
                    </TouchableOpacity>
                </View>
                <View style={styles.registerForm}>
                    <View style={styles.textJudul}>
                    <Text style={styles.text1}>Untuk membuat akun baru, isi data di bawah ini.</Text>
                    </View>
                    <View style={styles.textForm}>
                        <Text style={styles.text2}>Nama</Text>
                    </View>
                    <View style={styles.formName}>
                        <TextInput style={styles.input} placeholder="Nama Lengkap" placeholderTextColor="black" underlineColorAndroid="transparent"></TextInput>
                    </View>
                    <View style={styles.textForm}>
                        <Text style={styles.text2}>Tanggal Lahir</Text>
                    </View>
                    <View style={styles.formName}>
                        <TextInput style={styles.input} placeholder="DD/MM/YYYY" placeholderTextColor="black" underlineColorAndroid="transparent"></TextInput>
                    </View>
                    <View style={styles.textForm}>
                        <Text style={styles.text2}>Status Kerja</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEEFFF',
    },
    navBar: {
        backgroundColor: 'white',
        paddingTop: 60,
        paddingBottom: 40,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    heading2: {
        fontSize: 24,
        color: '#124f88',
        textAlign: 'center',
    },
    registerForm: {
        paddingTop: 20,
    },
    textJudul: {
        alignItems: 'center',
    },
    text1: {
        color: '#2b7ecb',
        fontWeight: 'bold',
    },
    formName: {
        paddingTop: 10,
        alignItems: 'center',
    },
    textForm: {
        paddingTop: 10,
        paddingHorizontal: 60,
    },
    text2: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        height: 36,
        width: '70%',
        backgroundColor: '#fff',
        borderColor: '#2b7ecb',
        borderWidth: 1,
        marginBottom: 40,
        paddingHorizontal: 10,
    }
});