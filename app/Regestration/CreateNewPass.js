import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'

//Components
import CreateNewPassForm from '../../Componentes/Regestration/CreateNewPassForm'
const CreateNewPass = () => {
return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.headerText}>إعادة ضبط كلمة المرور</Text>
        </View>
        <CreateNewPassForm/>
        <TouchableOpacity style={styles.btn}>
                <Link href="/Regestration/LogIn" style={styles.btnText}>تحديث كلمة المرور</Link>
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

export default CreateNewPass