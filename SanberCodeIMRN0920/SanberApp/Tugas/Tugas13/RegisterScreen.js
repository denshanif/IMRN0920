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
                    <View style={styles.radioButton}>
                        <View style={styles.radio1}>
                            <TouchableOpacity style={styles.button1}>
                                <Ionicons name="md-radio-button-on" size={32} color="#124f88" />
                            </TouchableOpacity>
                            <Text>Sedang Bekerja</Text>
                        </View>
                        <View style={styles.radio1}>
                            <TouchableOpacity style={styles.button1}>
                                <Ionicons name="md-radio-button-off" size={32} color="#124f88" />
                            </TouchableOpacity>
                            <Text>Tidak Bekerja</Text>
                        </View>
                        <View style={styles.button2}>
                            <TouchableOpacity style={styles.button3}>
                                <Text style={styles.buttonText}>Lanjutkan</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    navBar: {
        backgroundColor: 'white',
        paddingTop: 30,
        paddingBottom: 20,
        marginTop: 20,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        elevation: 5,
    },
    heading2: {
        fontSize: 20,
        fontWeight: 'bold',
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
    },
    radioButton: {
        paddingTop: 10,
        paddingHorizontal: 60,
    },
    radio1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button1: {
        paddingRight: 10,
    },
    button2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
    button3: {
        backgroundColor: '#2b7ecb',
        paddingVertical: 10,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
        width: '70%',
        marginBottom: 40,
        elevation: 5,
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
});