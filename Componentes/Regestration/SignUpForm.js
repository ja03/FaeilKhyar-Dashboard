import { View, Text, SafeAreaView, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'

const SignUpForm = () => {
return (
    <SafeAreaView style={styles.container}>

        {/* Phone input */}
        <View style={{marginVertical:16}}>
            <Text style={styles.inputText}>البريد الإلكتروني الخاص بالمستشفى</Text>
            <View style={styles.input}>
                <TextInput style={styles.inputField}/>
            </View>
        </View>
        {/* First Name input */}
        <View style={{marginBottom:16}}>
            <Text style={styles.inputText}>اسم المستشفى</Text>
            <View style={styles.input}>
                <TextInput style={styles.inputField}/>
            </View>
        </View>
        {/* Hospital Location input */}
        <View style={{marginBottom:16}}>
            <Text style={styles.inputText}>موقع المستشفى</Text>
            <View style={styles.input}>
                <TextInput style={styles.inputField}/>
            </View>
        </View>
        {/* Password input */}
        <View style={{marginBottom:16}}>
            <Text style={styles.inputText}>انشئ كلمة مرور</Text>
            <View style={styles.input}>
                <TextInput secureTextEntry={true} placeholder="Password" style={styles.inputField}/>
            </View>
            <Text style={{fontSize:14, marginVertical:8, textAlign:"right"}}>
            استخدم كلمة مرور بالإنجليزية تتضمن حرفًا كبيرًا واحد على الاقل مع  أرقام ورموز مميزة مثل (_) 
            </Text>
        </View>
        {/* Confirm Password input */}
        <View>
            <Text style={styles.inputText}>تأكيد كلمة المرور</Text>
            <View style={styles.input}>
                <TextInput secureTextEntry={true} style={styles.inputField}/>
            </View>
        </View>

    </SafeAreaView>
)}

const styles= StyleSheet.create({
    container:{
        marginTop:24,
        marginHorizontal:24,
        width:300,
        // height:500
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
export default SignUpForm