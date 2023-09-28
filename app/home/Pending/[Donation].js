import { View, Image,Text, StyleSheet, TouchableOpacity, TextInput, Alert, FlatList} from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'


const Donation = () => {
    const local = useLocalSearchParams()

    const [deviceImg, setDeviceImg] = useState(local.pendingDeviceImg)
    const [donnerPhoneNumber, setDonnerPhoneNumber] = useState(local.pendingDeviceDonnerPhoneNumber)
    const [deviceType, setDeviceType] = useState(local.pendingDeviceType)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.imgContainer}>
                    <Image source={deviceImg}/>
                </View>
                <View>
                    {/* Device Info */}
                    <Text style={styles.headerText}>
                    معلومات عن الجهاز
                    </Text>
                    <Text style={styles.Text}>نوع الجهاز: {local.pendingDeviceType}</Text>
                    <Text style={styles.Text}>موديل الجهاز: {local.pendingDeviceModel}</Text>
                    <Text style={styles.Text}>حجم الجهاز: {local.pendingDeviceSize}</Text>
                    <Text style={styles.Text}>غرض الاستخدام: {local.pendingDeviceCauseOfUse}</Text>
                    
                    {/* PrevUser Info */}
                    <Text style={styles.headerText}>معلومات عن المستخدم السابق</Text>
                    <Text style={styles.Text}>عمر المستخدم السابق: {local.pendingDevicePrevUserAge}</Text>
                    <Text style={styles.Text}>وزن المستخدم السابق: {local.pendingDevicePrevUserWeight}</Text>
                    <Text style={styles.Text}>
                        {`مدة الاستخدام: ${local.pendingDeviceCondition ? "جهاز جديد" : local.pendingDeviceDurationOfUse }`}
                    </Text>


  
                    {/* Donner Info */}
                    <Text style={styles.headerText}>معلومات عن فاعل الخير</Text>
                    <Text style={styles.Text}>رقم الهاتف: {local.pendingDeviceDonnerPhoneNumber}</Text>
                    <Text style={styles.Text}>مكان السكن: {local.pendingDeviceDonnerLocation}</Text>

                    {/* Need pick Up */}
                    <Text style={styles.Text}>
                        {`يحتاج الى سيارة لتوصيل الجهاز: ${local.pendingDeviceNeedPickUp ? "نعم" : "لا"}`}
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
                            style={styles.btn2}>
                                <Link
                                    href={{
                                        pathname:'/home/Pending/RejectDevice/[RejecteDevice]',
                                        params:{
                                            rejectDeviceImg: deviceImg,
                                            rejectDeviceType:local.pendingDeviceType,
                                            rejectDeviceSize:local.pendingDeviceSize,
                                            rejectDeviceModel:local.pendingDeviceModel,
                                            rejectDeviceDurationOfUse:local.pendingDeviceDurationOfUse,
                                            rejectDevicePrevUserAge:local.pendingDevicePrevUserAge,
                                            rejectDevicePrevUserWeight:local.pendingDevicePrevUserWeight,
                                            rejectDeviceCauseOfUse:local.pendingDeviceCauseOfUse,
                                            rejectDeviceDonnerPhoneNumber:local.pendingDeviceDonnerPhoneNumber,
                                            rejectDeviceDonnerLocation:local.pendingDeviceDonnerLocation
                                        }
                                    }}
                                    style={styles.btn2Text}
                                >
                                    <Text >رفض الجهاز</Text>
                                </Link>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn}>
                            <Link 
                                style={styles.btnText}
                                href={{
                                    pathname:'/home/Pending/AcceptDevice/[AcceptDevice]',
                                    params:{
                                        acceptDeviceImg: deviceImg,
                                        acceptDeviceType:local.pendingDeviceType,
                                        acceptDeviceSize:local.pendingDeviceSize,
                                        acceptDeviceModel:local.pendingDeviceModel,
                                        acceptDeviceDurationOfUse:local.pendingDeviceDurationOfUse,
                                        acceptDevicePrevUserAge:local.pendingDevicePrevUserAge,
                                        acceptDevicePrevUserWeight:local.pendingDevicePrevUserWeight,
                                        acceptDeviceCauseOfUse:local.pendingDeviceCauseOfUse,
                                        acceptDeviceDonnerPhoneNumber:local.pendingDeviceDonnerPhoneNumber,
                                        acceptDeviceDonnerLocation:local.pendingDeviceDonnerLocation 
                                    }
                                }}
                            >
                                <Text>قبول الجهاز</Text>
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


export default Donation