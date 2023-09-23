import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {  createRouter, Link } from 'expo-router';

//Assets
import logo_lg from '../../assets/imgs/logo-lg.png'

import React from 'react';


const Welcome = () => {

    return (
    <SafeAreaView >
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={logo_lg}/>
                <Text style={styles.titleText}>فاعل خير</Text>
                <Text style={styles.sloganText}>كن فاعلا للخير و قدم العون للاخرين</Text>
            </View>
        </View>
    </SafeAreaView>
);
};

const styles= StyleSheet.create({
    container: {
        // marginTop: 48,
        marginHorizontal: 24,
        display:"flex",
        alignItems:'center',
        flexDirection:'column',
    },
    content:{
        alignItems:"center",
        flexDirection:"column",
        gap:32,
    },
    titleText:{
        fontWeight:'bold',
        fontSize:32,
        
    },
    sloganText:{
        fontSize:24,
    }
})


export default Welcome;


