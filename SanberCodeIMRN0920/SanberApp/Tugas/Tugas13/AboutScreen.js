import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default class AboutScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <TouchableOpacity>
                        <Ionicons name="md-arrow-round-back" size={32} color="#124f88" />
                    </TouchableOpacity>
                    <Text style={styles.heading2}>About</Text>
                    <TouchableOpacity>
                        <Ionicons name="md-help-circle" size={32} color="#124f88" />
                    </TouchableOpacity>
                </View>
                <View style={styles.profileBox}>
                    <Image source={require('./assets/profile-photo.jpg')} style={{ width: 84, height: 84, borderRadius: 15 }} />
                    <View style={styles.identity}>
                        <Text style={styles.text1}>Hanif Al F</Text>
                        <Text style={styles.text2}>Informatics Student</Text>
                        <Text style={styles.text2}>Surabaya, Indonesia</Text>
                    </View>
                    <View style={styles.pesanBox}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.text2}>Kirim Pesan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.sosmedRow1}>
                    <View style={styles.box1}>
                        <Text style={styles.text3}>Facebook</Text>
                        <FontAwesome name="facebook-square" size={56} color='white' />
                        <Text style={styles.text4}>See my profile</Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.text5}>Twitter</Text>
                        <FontAwesome name="twitter" size={56} color='#124f88' />
                        <Text style={styles.text6}>See my profile</Text>
                    </View>
                </View>
                <View style={styles.sosmedRow1}>
                    <View style={styles.box2}>
                        <Text style={styles.text5}>Instagram</Text>
                        <FontAwesome name="instagram" size={56} color='#124f88' />
                        <Text style={styles.text6}>See my profile</Text>
                    </View>
                    <View style={styles.box1}>
                        <Text style={styles.text3}>Github</Text>
                        <FontAwesome name="github" size={56} color='white' />
                        <Text style={styles.text4}>See my profile</Text>
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
        paddingTop: 30,
        paddingBottom: 20,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        marginTop: 20,
        elevation: 5,
    },
    heading2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#124f88',
        textAlign: 'center',
    },
    profileBox: {
        backgroundColor: '#2b7ecb',
        height: '15%',
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 2,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 30,
    },
    text1: {
        fontSize: 18,
        color: 'white',
    },
    text2: {
        color: 'white',
    },
    pesanBox: {
        backgroundColor: '#124f88',
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sosmedRow1: {
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingHorizontal: 15,
        paddingBottom: 3
        0,
    },
    box1: {
        backgroundColor: '#2b7ecb',
        paddingHorizontal: 10,
        width: 150,
        height: 150,
        borderRadius: 25,
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text3: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 10,
    },
    text4: {
        color: 'white',
        textDecorationLine: "underline",
        paddingTop: 10,
    },
    box2: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        width: 150,
        height: 150,
        borderRadius: 25,
        borderColor: '#2b7ecb',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    text5: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#124f88',
        paddingBottom: 10,
    },
    text6: {
        color: '#124f88',
        textDecorationLine: "underline",
        paddingTop: 10,
    },
});