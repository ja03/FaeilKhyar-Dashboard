import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'

// Components
import SignUpForm from '../../Componentes/Regestration/SignUpForm'
import { ScrollView } from 'react-native-gesture-handler'

const SignUp = () => {
return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.headerText}>انشئ حسابك و انضم إلينا</Text>
            <Text style={styles.subLinkText}>
                لديك حساب؟  
                <Link href="/Regestration/LogIn" style={{textDecorationLine: "underline"}}>
                تسجيل دخول 
                </Link>
            </Text>
        </View>
        <ScrollView style={styles.scrollViewStyle}>
        <SignUpForm/>
        </ScrollView>
        <TouchableOpacity style={styles.btn}>
                <Link href="/Regestration/VerifyPhone" style={styles.btnText}>انشئ حسابي</Link>
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
        marginBottom:48,

},
    btnText:{
        fontSize:18,
        color:'white',
}
});
export default SignUp