import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CreateNewPassForm = () => {
return (
    <SafeAreaView style={styles.container}>

        {/* Password input */}
        <View style={{marginBottom:16}}>
            <Text style={styles.inputText}>انشئ كلمة مرور</Text>
            <View style={styles.input}>
                <TextInput secureTextEntry={true} style={styles.inputField}/>
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
        marginTop:48,
        marginHorizontal:24,
        width:300,
        gap:8
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
export default CreateNewPassForm