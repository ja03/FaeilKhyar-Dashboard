import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { useRoute , useLocalSearchParams} from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';


const Device = () => {
    const local = useLocalSearchParams()
    const [deviceID, setDeviceID] = useState(local.deviceID)
    const [deviceImg, setDeviceImg] = useState(local.deviceImg)
    const [donnerName, setDonnerName] = useState(local.donnerName)
    const [deviceType, setDeviceType] = useState(local.deviceType)

    return (
        <SafeAreaProvider style={styles.container}>
            <ScrollView>
                <View style={styles.imgContainer}>
                    <Image source={local.deviceImg}/>
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity  style={styles.btn2}>
                        <Link href={{
                            pathname:'/home/Accepted/GiveDevice/[GiveDevice]',
                            params:{
                                rejectedDeviceImg: deviceImg,
                                rejectedDeviceType: deviceType,
                                rejectedDonnerName: donnerName
                            }
                            }}
                            onPress={()=>{console.log('give device')}}
                        >
                            <Text style={{color:'#ffffff', fontSize:18}}>منح الجهاز</Text>
                        </Link>
                    </TouchableOpacity>
                </View>
                <View>
                    {/* Device Info */}
                    <Text style={styles.headerText}>
                    معلومات عن الجهاز
                    </Text>
                    <Text style={styles.Text}>نوع الجهاز: {local.deviceType}</Text>
                    <Text style={styles.Text}>موديل الجهاز: {local.deviceModel}</Text>
                    <Text style={styles.Text}>حجم الجهاز: {local.deviceSize}</Text>
                    <Text style={styles.Text}>غرض الاستخدام: {local.causeOfUse}</Text>
                    
                    {/* PrevUser Info */}
                    <Text style={styles.headerText}>معلومات عن المستخدم السابق</Text>
                    <Text style={styles.Text}>عمر المستخدم السابق: {local.prevUserAge}</Text>
                    <Text style={styles.Text}>وزن المستخدم السابق: {local.prevUserWeight}</Text>
                    <Text style={styles.Text}>مدة الاستخدام: {local.durationOfUse}</Text>

                    {/* Donner Info */}
                    <Text style={styles.headerText}>معلومات عن فاعل الخير</Text>
                    <Text style={styles.Text}>الاسم: {local.donnerName}</Text>
                    <Text style={styles.Text}>رقم الهاتف: {local.donnerPhone}</Text>
                    <Text style={styles.Text}>مكان السكن: {local.donnerLocation}</Text>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:24
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
    btnView:{
        marginVertical:18
    },
    btn2:{
        fontSize:18,
        borderWidth:1.5,
        borderRadius:8,
        borderColor:"#005F86",
        paddingHorizontal:16,
        paddingVertical:10,
        backgroundColor:"#005F86",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }
});


export default Device