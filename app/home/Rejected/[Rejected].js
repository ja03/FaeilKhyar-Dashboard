import { View, Image,Text, StyleSheet, TouchableOpacity, TextInput, Alert, FlatList} from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'


const Rejected = () => {
    const local = useLocalSearchParams()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.imgContainer}>
                    <Image source={local.rejectedDeviceImg}/>
                </View>
                <View>
                    {/* Cause of Rejection */}
                    <Text style={styles.headerText}>سبب الرفض</Text>
                    <Text style={styles.Text}>{local.rejectedDeviceCauseOfReject}</Text>

                    {/* Device Info */}
                    <Text style={styles.headerText}>معلومات عن الجهاز</Text>
                    <Text style={styles.Text}>نوع الجهاز: {local.rejectedDeviceType}</Text>
                    <Text style={styles.Text}>موديل الجهاز: {local.rejectedDeviceModel}</Text>
                    <Text style={styles.Text}>حجم الجهاز: {local.rejectedDeviceSize}</Text>
                    <Text style={styles.Text}>غرض الاستخدام: {local.rejectedDeviceCauseOfUse}</Text>
                    
                    {/* PrevUser Info */}
                    <Text style={styles.headerText}>معلومات عن المستخدم السابق</Text>
                    <Text style={styles.Text}>عمر المستخدم السابق: {local.rejectedDevicePrevUserAge}</Text>
                    <Text style={styles.Text}>وزن المستخدم السابق: {local.rejectedDevicePrevUserWeight}</Text>
                    <Text style={styles.Text}>مدة الاستخدام: {local.rejectedDeviceDurationOfUse}</Text>

                    {/* Donner Info */}
                    <Text style={styles.headerText}>معلومات عن فاعل الخير</Text>
                    <Text style={styles.Text}>رقم الهاتف: {local.rejectedDeviceDonnerPhoneNumber}</Text>
                    <Text style={styles.Text}>مكان السكن: {local.rejectedDeviceDonnerLocation}</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:24,
        display:"flex",
        flexDirection:"column",
        flex:1,
        textAlign:"right",
        backgroundColor:"#FFF",
    },
    imgContainer:{
        borderBottomWidth: 3,
        borderBottomColor: 'gray',
        paddingBottom: 8,
        borderRadius:4,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:12 
    },
    headerText:{
        textAlign:'right',
        fontSize:24,
        fontWeight:'bold',
        marginTop:24
        // marginHorizontal:24
    },
    Text:{
        textAlign:"right",
        fontSize:16,
        marginVertical:8,
    },
    btnView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:32
    },
    btn1:{
        borderWidth:1.5,
        marginHorizontal:32,
        borderRadius:8,
        borderColor:"#005F86",
        paddingHorizontal:16,
        paddingVertical:10,
    },
    btn2:{
        fontSize:18,
        borderWidth:1.5,
        marginHorizontal:32,
        borderRadius:8,
        borderColor:"#005F86",
        paddingHorizontal:16,
        paddingVertical:10,
        backgroundColor:"#005F86"
    }
});


export default Rejected