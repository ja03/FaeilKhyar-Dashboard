import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const LogInForm = () => {
return (
    <SafeAreaView style={styles.container}>

        {/* Phone input */}
        <View>
            <Text style={styles.inputText}>البريد الإلكتروني الخاص بالمستشفى</Text>
            <View style={styles.input}>
                <TextInput style={styles.inputField}/>
            </View>
        </View>
        {/* Password input */}
        <View>
            <Text style={styles.inputText}>ادخل كلمة المرور</Text>
            <View style={styles.input}>
                <TextInput secureTextEntry={true} placeholder="Password" style={styles.inputField}/>
            </View>
        </View>
    </SafeAreaView>
)}

const styles= StyleSheet.create({
    container:{
        marginTop:24,
        marginHorizontal:24,
        width:300,
        gap:32
    },
    inputText:{
        textAlign:"right",
        fontSize:18,
        marginBottom:8,   
    },
    input:{
        height: 50,
        borderRadius:8,
        backgroundColor: '#899BAB',
        paddingHorizontal: 16,
        paddingVertical:10,
        display:"flex",
        justifyContent:"center"
    },
    inputField:{
        fontSize:16,
        textAlign:"right",
    }
})
export default LogInForm