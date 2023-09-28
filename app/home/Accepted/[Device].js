import { View, Image,Text, StyleSheet, TouchableOpacity, TextInput, Alert, FlatList} from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'


const Device = () => {
    const local = useLocalSearchParams()
    // const [deviceID, setDeviceID] = useState(local.deviceID)
    // const [deviceImg, setDeviceImg] = useState(local.deviceImg)
    // const [donnerName, setDonnerName] = useState(local.donnerName)
    // const [deviceType, setDeviceType] = useState(local.deviceType)

    return (
        <SafeAreaView style={styles.container}>
                        <ScrollView>
                <View style={styles.imgContainer}>
                    <Image source={local.acceptedDeviceImg}/>
                </View>
                <View>
                    {/* Device Info */}
                    <Text style={styles.headerText}>
                    معلومات عن الجهاز
                    </Text>
                    <Text style={styles.Text}>نوع الجهاز: {local.acceptedDeviceType}</Text>
                    <Text style={styles.Text}>موديل الجهاز: {local.acceptedDeviceModel}</Text>
                    <Text style={styles.Text}>حجم الجهاز: {local.acceptedDeviceSize}</Text>
                    <Text style={styles.Text}>غرض الاستخدام: {local.acceptedDeviceCauseOfUse}</Text>
                    
                    {/* PrevUser Info */}
                    <Text style={styles.headerText}>معلومات عن المستخدم السابق</Text>
                    <Text style={styles.Text}>عمر المستخدم السابق: {local.acceptedDevicePrevUserAge}</Text>
                    <Text style={styles.Text}>وزن المستخدم السابق: {local.acceptedDevicePrevUserWeight}</Text>
                    <Text style={styles.Text}>
                        {`مدة الاستخدام: ${local.acceptedDeviceCondition ? "جهاز جديد" : local.acceptedDeviceDurationOfUse }`}
                    </Text>



                    {/* Donner Info */}
                    <Text style={styles.headerText}>معلومات عن فاعل الخير</Text>
                    <Text style={styles.Text}>رقم الهاتف: {local.acceptedDeviceDonnerPhoneNumber}</Text>
                    <Text style={styles.Text}>مكان السكن: {local.acceptedDeviceDonnerLocation}</Text>

                    {/* Need pick Up */}
                    <Text style={styles.Text}>
                        {`يحتاج الى سيارة لتوصيل الجهاز: ${local.acceptedDeviceNeedPickUp ? "نعم" : "لا"}`}
                    </Text>
                </View>
                <View
                    style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            marginVertical:24
                        }}>
                        <TouchableOpacity
                            style={styles.btn}
                        >
                            <Link 
                                href={{
                                    pathname:'/home/Accepted/GiveDevice/[GiveDevice]',
                                    params:{
                                        giveDeviceType:local.acceptedDeviceType,
                                        giveDeviceSize:local.acceptedDeviceSize,
                                        giveDeviceModel:local.acceptedDeviceModel,
                                        giveDeviceImg:local.acceptedDeviceImg,
                                        giveDeviceCondition:local.acceptedDeviceCondition
                                    }
                                }} 
                                style={styles.btnText}
                            >
                                <Text >منح الجهاز لمريض</Text>
                            </Link>
                        </TouchableOpacity>
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
        marginTop:8,
    },
    btn: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: "#005F86",
        marginVertical: 8,
        flex: 1,
        marginLeft: 2,
    },
    btn2: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        borderColor: "#005F86",
        borderWidth: 2,
        marginVertical: 8,
        flex: 1,
        marginRight: 2,
    },
    btnText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
    },
    btn2Text: {
        fontSize: 18,
        color: "#005F86",
        textAlign: "center",
    },
});


export default Device