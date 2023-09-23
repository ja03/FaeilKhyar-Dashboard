import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

//Assets
import logo_lg from '../../assets/imgs/logo-lg.png'

const AboutApp = () => {
return (
    <View style={styles.container}>
        <Image source={logo_lg}/>
        <Text style={styles.headerText}> كيفية الاستخدام </Text>
        <Text style={styles.subText}>أنشئ حسابًا للمستشفى.</Text>
        <Text style={styles.subText}>عرض وإدارة التبرعات.</Text>
        <Text style={styles.subText}>قبول أو رفض التبرعات.</Text>
        <Text style={styles.subText}> 
            إنشاء رمز الاستجابة السريعة (QR code) للتبرعات المقبولة.       
        </Text>
        <Text style={styles.subText}> 
            بحث عن الأجهزة وتوفيرها للمرضى.        
        </Text>
        <Text style={styles.subText}> 
            مسح رموز الاستجابة السريعة لتحديث المعلومات.        
        </Text>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        marginTop: 24,
        marginHorizontal: 24,
        justifyContent:"flex-start",
        alignItems:'flex-end',
        flexDirection:'column',
        gap:18
    }, 
    headerText:{
        textAlign:'right',
        fontSize:28,
        fontWeight:'bold'
    },
    subText:{
        textAlign:'right',
        fontSize:18
    }
})

export default AboutApp