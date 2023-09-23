import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'

// Components
import PhoneVerification from '../../Componentes/Regestration/PhoneVerification'
const VerifyPhone = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PhoneVerification />
      <TouchableOpacity style={styles.btn}>
          <Link href="/home" style={styles.btnText}>تأكيد البريد الإلكتروني </Link>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#D9E7ED',
      alignItems:"flex-end"
  },
  btn:{
    backgroundColor:'#005F86',
    paddingHorizontal:16,
    paddingVertical:10,
    borderRadius:8,
    marginHorizontal:24,
    marginTop:24,

  },
  btnText:{
    fontSize:18,
    color:'white',
    textAlign:"center"
  }
});
export default VerifyPhone