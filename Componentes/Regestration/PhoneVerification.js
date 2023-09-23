import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'

const PhoneVerification = () => {
return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>تأكيد البريد الإلكتروني </Text>
        <Text style={styles.subText}>
            تم إرسال رسالة تحتوي على رمز  إلى البريد الإلكتروني الخاص بك، يرجى إدخال هذا الرمز لتأكيد رقم هاتفك.        
        </Text>
        {/* Code Input */}
        <View style={{marginTop:24}}>
            <View style={styles.input}>
                <TextInput style={styles.inputField}/>
            </View>
        </View>
        <Text style={{marginTop:8, fontSize:16}}>لم يصلني الرمز؟
            <Text style={{textDecorationLine:"underline"}}> ارسله مرة اخرى </Text>
        </Text>
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
    container: {
        alignItems:"flex-end",
        marginHorizontal:24,
        marginTop:48,
    },
    subText:{
        textAlign:"right",
        fontSize:20,
        color:'#000',
        marginTop:24,
        marginBottom:16
    },
    headerText:{
        textAlign:"right",
        fontSize:28,
        fontWeight:'bold',
    },
    subLinkText:{
        textAlign:"right",
        fontSize:16,
        color:'#005F86',
        marginHorizontal:24,
        marginTop:8
    },
    inputText:{
        textAlign:"right",
        fontSize:18,
        marginBottom:8,   
    },
    input:{
        height: 50,
        width:200,
        borderRadius:8,
        backgroundColor: '#899BAB',
        paddingHorizontal: 16,
        paddingVertical:10,
        display:"flex",
        justifyContent:"center",
    },
    inputField:{
        fontSize:16,
        textAlign:"right",
    }
});
export default PhoneVerification