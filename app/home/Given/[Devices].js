import { View, Image,Text, StyleSheet, TouchableOpacity, TextInput, Alert, FlatList} from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'


const Devices = () => {
    const local = useLocalSearchParams()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.imgContainer}>
                    <Image source={local.givenDeviceImg}/>
                </View>
                <View>
                    {/* GivenPatent Info */}
                    <Text style={styles.headerText}> المريض الذي تم توفير الجهاز له</Text>
                    <Text style={styles.Text}>رقم الهوية الطبية: {local.givenDevicePatientMedId}</Text>

                    {/* Device Info */}
                    <Text style={styles.headerText}>معلومات عن الجهاز</Text>
                    <Text style={styles.Text}>نوع الجهاز: {local.givenDeviceType}</Text>
                    <Text style={styles.Text}>موديل الجهاز: {local.givenDeviceModel}</Text>
                    <Text style={styles.Text}>حجم الجهاز: {local.givenDeviceSize}</Text>
                    <Text style={styles.Text}>غرض الاستخدام: {local.givenDeviceCauseOfUse}</Text>
                    <Text style={styles.Text}>حالة الاستخدام: {local.givenDeviceCondition}</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        textAlign: "right",
        backgroundColor: "#FFF",
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
    reportImgContainer:{
        backgroundColor:"gray",
        padding:8,
        borderRadius:4,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:12 
    }

});


export default Devices