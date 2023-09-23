import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'

//Components
import LogInForm from '../../Componentes/Regestration/LogInForm'
const LogIn = () => {
return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.headerText}>أفعالك اللطيفة تبدأ بتسجيل الدخول</Text>
            <Text style={styles.subLinkText}>
                ليس لديك حساب؟ 
                <Link href="/Regestration/SignUp" style={{textDecorationLine: "underline"}}>
                انشئ حساب الان  
                </Link>
            </Text>
        </View>
        <LogInForm/>
        <Link href="/Regestration/ForgotPass" style={{marginRight:24, marginTop: 8}}>
            <Text style={styles.subLinkText}>نسيت كلمة المرور؟</Text>
        </Link>
        <TouchableOpacity style={styles.btn}>
                <Link href="/home" style={styles.btnText}>تسجيل دخول</Link>
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
    headerText:{
        textAlign:"right",
        fontSize:28,
        fontWeight:'bold',
        marginTop:48,
        marginHorizontal:24
    },
    subLinkText:{
        textAlign:"right",
        fontSize:16,
        color:'#005F86',
        marginHorizontal:24,
        marginTop:8
    },
    btn:{
        backgroundColor:'#005F86',
        paddingHorizontal:16,
        paddingVertical:10,
        borderRadius:8,
        marginTop: 24,
        marginHorizontal:24,
    },
    btnText:{
        fontSize:18,
        color:'white',
    }
});

export default LogIn