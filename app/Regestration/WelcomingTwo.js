import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'

// Components
import AboutApp from '../../Componentes/Regestration/AboutApp'
const WelcomingTwo = () => {
    return (
    <SafeAreaView style={styles.container}>
        <AboutApp/>
        <TouchableOpacity style={styles.btn}>
                <Link href="/Regestration/LogIn" style={styles.btnText}>كن فاعلا للخير</Link>
        </TouchableOpacity>
    </SafeAreaView>
)    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9E7ED',
        alignItems:"flex-end",
    },
    btn:{
        backgroundColor:'#005F86',
        paddingHorizontal:16,
        paddingVertical:10,
        borderRadius:8,
        margin:24,
        marginTop:42
    },
    btnText:{
        fontSize:18,
        color:'white',
    }
});

export default WelcomingTwo